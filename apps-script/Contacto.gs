/**
 * Formulario de contacto de fmgarcia.github.io y de CursosGithubIO.
 *
 * Se despliega como aplicación web en la cuenta de Google que debe recibir los
 * correos (ver apps-script/README.md). El destinatario es esa misma cuenta, así
 * que la dirección no aparece en este código ni en ninguna web.
 */

const MAX_POR_HORA = 20;          // límite global de envíos, contra abusos
const MAX_POR_EMAIL_HORA = 3;     // límite por remitente

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const nombre = limpiar(p.nombre, 100);
    const email = limpiar(p.email, 150);
    const tema = limpiar(p.tema, 100);
    const mensaje = limpiar(p.mensaje, 5000);
    const origen = limpiar(p.origen, 300);

    if (!nombre || !email || !tema || !mensaje) return respuesta(false, 'Faltan campos obligatorios');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respuesta(false, 'Email no válido');

    const cache = CacheService.getScriptCache();
    if (!contar(cache, 'total', MAX_POR_HORA) || !contar(cache, 'email:' + email.toLowerCase(), MAX_POR_EMAIL_HORA)) {
      return respuesta(false, 'Demasiados mensajes, inténtalo más tarde');
    }

    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      replyTo: email,
      name: 'Formulario fmgarcia.github.io',
      subject: '[Contacto] ' + tema + ' - ' + nombre,
      body:
        'Nombre: ' + nombre + '\n' +
        'Email: ' + email + '\n' +
        'Tema: ' + tema + '\n' +
        'Página: ' + origen + '\n\n' +
        mensaje
    });

    return respuesta(true);
  } catch (err) {
    console.error(err);
    return respuesta(false, 'Error interno');
  }
}

function limpiar(valor, max) {
  return String(valor || '').trim().slice(0, max);
}

function contar(cache, clave, max) {
  const n = Number(cache.get(clave) || 0);
  if (n >= max) return false;
  cache.put(clave, String(n + 1), 3600);
  return true;
}

function respuesta(ok, error) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: ok, error: error || null }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Ejecútalo una vez desde el editor para conceder el permiso de enviar correo. */
function probarEnvio() {
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), 'Prueba del formulario', 'Si lees esto, el script ya puede enviar correos.');
}
