// ===== Formulario de contacto =====
// Lo usan fmgarcia.github.io (inicio y contacto) y el índice de CursosGithubIO.
// El envío lo hace un Google Apps Script desplegado como aplicación web en la
// cuenta de Google del autor (código en apps-script/Contacto.gs del repo): la
// dirección de destino solo existe allí, nunca en esta web.
// Pega aquí la URL de la implementación (termina en /exec). Mientras esté
// vacía, el formulario avisa de que aún no está activo y no envía nada.
const CONTACTO_URL = '';

(function () {
    function iniciar() {
        document.querySelectorAll('form.contacto-form').forEach(function (form) {
            if (form.dataset.listenerAttached) return;
            form.dataset.listenerAttached = 'true';
            form.dataset.cargado = Date.now();
            form.addEventListener('submit', enviar);
        });

        document.querySelectorAll('[data-contacto-toggle]').forEach(function (btn) {
            if (btn.dataset.listenerAttached) return;
            btn.dataset.listenerAttached = 'true';
            btn.addEventListener('click', function () {
                const panel = document.getElementById(btn.getAttribute('aria-controls'));
                const abrir = btn.getAttribute('aria-expanded') !== 'true';
                btn.setAttribute('aria-expanded', String(abrir));
                panel.hidden = !abrir;
                if (abrir) panel.querySelector('input, select, textarea').focus();
            });
        });
    }

    async function enviar(e) {
        e.preventDefault();

        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const msgEl = form.querySelector('.form-message');
        const datos = new FormData(form);
        const campo = function (nombre) { return String(datos.get(nombre) || '').trim(); };

        if (!campo('nombre') || !campo('email') || !campo('tema') || !campo('mensaje')) {
            mostrar(msgEl, 'Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo('email'))) {
            mostrar(msgEl, 'Por favor, introduce un email válido.', 'error');
            return;
        }

        // Campo trampa: los bots lo rellenan, las personas no lo ven.
        // Enviar en menos de 3 segundos también delata a un bot.
        if (campo('web') || Date.now() - Number(form.dataset.cargado) < 3000) {
            mostrar(msgEl, '✅ ¡Mensaje enviado! Te responderé lo antes posible.', 'success');
            form.reset();
            return;
        }

        if (!CONTACTO_URL) {
            mostrar(msgEl, 'El formulario se activará en breve. Mientras tanto, puedes escribirme por LinkedIn.', 'error');
            return;
        }

        const textoBoton = btn.textContent;
        btn.disabled = true;
        btn.textContent = '⏳ Enviando...';

        try {
            const cuerpo = new URLSearchParams();
            ['nombre', 'email', 'tema', 'mensaje'].forEach(function (n) { cuerpo.append(n, campo(n)); });
            cuerpo.append('origen', form.dataset.origen || location.href);

            // application/x-www-form-urlencoded es una petición simple: sin preflight CORS.
            const resp = await fetch(CONTACTO_URL, { method: 'POST', body: cuerpo });
            const json = await resp.json();
            if (!json.ok) throw new Error(json.error || 'Error desconocido');

            mostrar(msgEl, '✅ ¡Mensaje enviado! Te responderé lo antes posible.', 'success');
            form.reset();
            form.dataset.cargado = Date.now();
        } catch (err) {
            console.error('Error al enviar:', err);
            mostrar(msgEl, '❌ No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.', 'error');
        } finally {
            btn.disabled = false;
            btn.textContent = textoBoton;
        }
    }

    function mostrar(el, texto, tipo) {
        if (!el) return;
        el.textContent = texto;
        el.className = 'form-message ' + tipo;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }

    // Navegación instantánea de MkDocs Material
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function () { setTimeout(iniciar, 0); });
    }
})();
