# Formulario de contacto (Google Apps Script)

Los formularios de fmgarcia.github.io y del índice de CursosGithubIO envían sus datos a este
script, que manda un correo a la cuenta de Google donde está desplegado. La dirección de destino
no aparece en ninguna web ni en este repositorio. Esta carpeta no se publica, porque MkDocs solo
construye `docs/`.

## Desplegarlo (una sola vez)

1. Entra en <https://script.google.com> con la cuenta de Gmail que debe recibir los mensajes y
   pulsa **Nuevo proyecto**. Ponle de nombre, por ejemplo, `Contacto web`.
2. Borra el contenido de `Código.gs` y pega el de [Contacto.gs](Contacto.gs). Guarda.
3. En el desplegable de funciones elige `probarEnvio` y pulsa **Ejecutar**. Google pedirá permiso
   para enviar correo en tu nombre: **Revisar permisos** → tu cuenta → **Configuración avanzada** →
   **Ir a Contacto web (no seguro)** → **Permitir**. Te llegará un correo de prueba.
4. **Implementar** → **Nueva implementación** → tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
5. Pulsa **Implementar** y copia la **URL de la aplicación web** (termina en `/exec`).
6. Pega esa URL en la constante `CONTACTO_URL` de
   [docs/assets/contacto-form.js](../docs/assets/contacto-form.js) y haz push. Mientras esté
   vacía, el formulario avisa de que aún no está activo y no envía nada.

El índice de CursosGithubIO carga ese mismo fichero desde `https://fmgarcia.github.io/assets/`,
así que basta con configurarlo en un solo sitio.

## Si cambias el código

Edita el script y ve a **Implementar** → **Gestionar implementaciones** → lápiz → **Versión:
Nueva versión** → **Implementar**. Así la URL no cambia.
