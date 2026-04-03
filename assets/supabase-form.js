// ===== Supabase Configuration =====
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto en Supabase
const SUPABASE_URL = 'https://yudvphvlzcdanmobbanh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZHZwaHZsemNkYW5tb2JiYW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MDc1NjUsImV4cCI6MjA4NjA4MzU2NX0.RuvLvxMWdB8XTv7XWqRdruGriGjTvFt6aETHYr9PIAM';

let supabaseClient = null;

function initSupabase() {
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
}

// Wait for DOM and Supabase SDK to load
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure supabase SDK is loaded
    setTimeout(initSupabase, 500);

    // Listen for MkDocs Material instant loading
    document.addEventListener('DOMContentSwitch', attachFormListener);

    attachFormListener();
});

// For MkDocs Material instant navigation
if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
        setTimeout(function () {
            initSupabase();
            attachFormListener();
        }, 300);
    });
}

function attachFormListener() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    // Prevent duplicate listeners
    if (form.dataset.listenerAttached) return;
    form.dataset.listenerAttached = 'true';

    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const msgEl = document.getElementById('form-message');

    // Get form data
    const nombre = form.querySelector('#nl-nombre').value.trim();
    const email = form.querySelector('#nl-email').value.trim();
    const interes = form.querySelector('#nl-interes').value;

    // Validation
    if (!nombre || !email) {
        showMessage(msgEl, 'Por favor, completa todos los campos obligatorios.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(msgEl, 'Por favor, introduce un email válido.', 'error');
        return;
    }

    // Disable button while submitting
    btn.disabled = true;
    btn.textContent = '⏳ Enviando...';

    try {
        if (!supabaseClient) {
            initSupabase();
        }

        if (!supabaseClient) {
            throw new Error('No se pudo conectar con el servicio.');
        }

        const { data, error } = await supabaseClient
            .from('suscriptores')
            .insert([
                {
                    nombre: nombre,
                    email: email,
                    interes: interes,
                    fecha_registro: new Date().toISOString()
                }
            ]);

        if (error) {
            // Check for duplicate email
            if (error.code === '23505') {
                showMessage(msgEl, '📧 Este email ya está registrado. ¡Gracias por tu interés!', 'error');
            } else {
                throw error;
            }
        } else {
            showMessage(msgEl, '🎉 ¡Te has suscrito correctamente! Recibirás las últimas novedades en tu email.', 'success');
            form.reset();
        }
    } catch (err) {
        console.error('Error al enviar:', err);
        showMessage(msgEl, '❌ Hubo un error al procesar tu solicitud. Inténtalo de nuevo más tarde.', 'error');
    } finally {
        btn.disabled = false;
        btn.textContent = '🚀 Suscribirme';
    }
}

function showMessage(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = 'form-message ' + type;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
