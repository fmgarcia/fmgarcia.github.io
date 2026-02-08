# 🗄️ Configuración de Supabase para el formulario de suscripción

Este archivo contiene las instrucciones para configurar Supabase como backend
del formulario de suscripción del portfolio.

## 📋 Pasos de configuración

### 1. Crear cuenta y proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta gratuita
2. Crea un **nuevo proyecto** (elige un nombre y una contraseña para la BD)
3. Espera a que el proyecto termine de aprovisionarse (~2 min)

### 2. Crear la tabla `suscriptores`

Ve a **SQL Editor** en el panel de Supabase y ejecuta este script:

```sql
-- Crear tabla de suscriptores
CREATE TABLE suscriptores (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    interes TEXT DEFAULT 'todos',
    fecha_registro TIMESTAMPTZ DEFAULT NOW(),
    activo BOOLEAN DEFAULT TRUE
);

-- Crear índice para búsquedas rápidas por email
CREATE INDEX idx_suscriptores_email ON suscriptores(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE suscriptores ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT desde anónimos (para el formulario público)
CREATE POLICY "Permitir inserciones públicas"
    ON suscriptores
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Política: Solo lectura para usuarios autenticados (admin)
CREATE POLICY "Lectura solo para autenticados"
    ON suscriptores
    FOR SELECT
    TO authenticated
    USING (true);
```

### 3. Obtener credenciales

1. Ve a **Settings** → **API** en el panel de Supabase
2. Copia la **URL del proyecto** (ej: `https://xxxx.supabase.co`)
3. Copia la **anon/public key** (clave pública)

### 4. Configurar en el código

Edita el archivo `docs/assets/supabase-form.js` y reemplaza:

```javascript
const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'eyTU_CLAVE_PUBLICA_AQUI...';
```

### 5. (Opcional) Ver los suscriptores

En el panel de Supabase, ve a **Table Editor** → **suscriptores** para ver
todos los registros. También puedes ejecutar consultas SQL:

```sql
-- Ver todos los suscriptores activos
SELECT * FROM suscriptores WHERE activo = TRUE ORDER BY fecha_registro DESC;

-- Contar suscriptores por interés
SELECT interes, COUNT(*) FROM suscriptores GROUP BY interes;
```

## 🔒 Seguridad

- La **anon key** es pública y segura de exponer (solo permite INSERTs)
- Los **SELECT** están restringidos a usuarios autenticados
- Los emails tienen restricción **UNIQUE** para evitar duplicados
- **RLS (Row Level Security)** está activado para proteger los datos

## 💡 Plan gratuito de Supabase

El plan gratuito incluye:
- 500 MB de almacenamiento en base de datos
- Hasta 50,000 filas
- API ilimitadas (con rate limiting)
- Perfecto para un portfolio personal
