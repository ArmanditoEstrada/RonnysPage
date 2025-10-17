# Ronny Food Truck - Landing Page

Landing page moderna y retro para el food truck Ronny, especializado en postres y antojitos en Ecatepec, México.

## 🚀 Tecnologías

- React 18
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Resend (Email service)

## 🎨 Características

- Diseño retro con colores vibrantes (rojo, negro, dorado, amarillo)
- Totalmente responsive (móvil, tablet, desktop)
- Animaciones suaves y efectos LED
- Secciones: Hero, Sobre Nosotros, Menú, Ubicación, Reseñas, Contacto
- Formulario de contacto con envío de emails vía Resend
- Integración con Google Maps
- Enlaces a redes sociales

## 📦 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
\`\`\`

## 📧 Configuración de Email (Resend)

El formulario de contacto usa Resend para enviar emails. Para configurarlo:

### 1. Crear cuenta en Resend

1. Ve a [resend.com](https://resend.com) y crea una cuenta gratuita
2. Verifica tu email

### 2. Obtener API Key

1. En el dashboard de Resend, ve a "API Keys"
2. Crea una nueva API key
3. Copia la key (empieza con `re_`)

### 3. Configurar Variable de Entorno

En v0, agrega la variable de entorno:

1. Abre la sección **Vars** en el sidebar izquierdo
2. Agrega una nueva variable:
   - **Nombre**: `RESEND_API_KEY`
   - **Valor**: Tu API key de Resend (ej: `re_123abc...`)

### 4. Configurar Email de Destino

Edita el archivo `app/actions.ts` y cambia:

\`\`\`typescript
to: ["tu-email@ejemplo.com"], // Cambia esto por tu email real
\`\`\`

### 5. Verificar Dominio (Opcional - Para Producción)

Para usar un dominio personalizado en producción:

1. En Resend, ve a "Domains"
2. Agrega tu dominio
3. Configura los registros DNS según las instrucciones
4. Actualiza el campo `from` en `app/actions.ts`:

\`\`\`typescript
from: "Ronny's Food Truck <contacto@tudominio.com>",
\`\`\`

**Nota**: En desarrollo puedes usar `onboarding@resend.dev` como remitente.

## 🌐 Desarrollo Local

El proyecto estará disponible en `http://localhost:3000`

## 📝 Próximos Pasos

- ✅ Integrar backend para el formulario de contacto (Resend)
- Agregar más imágenes reales del food truck y productos
- Implementar sistema de pedidos en línea
- Agregar galería de fotos de clientes

## 🐕 Sobre Ronny

Ronny es nuestro chihuahua mascota, representado como un logo LED en el food truck. ¡Es la cara de este dulce sueño sobre ruedas!
