# Landing System — Plantilla para negocios locales

Plantilla estática reutilizable hecha con HTML, CSS y JavaScript puro.

## Estructura

- `index.html` — estructura de la landing.
- `css/style.css` — diseño y responsive.
- `js/main.js` — comportamiento y renderizado de datos.
- `config/business.js` — **archivo principal que debes editar por cliente**.
- `assets/` — imágenes del cliente.

## Personalizar un cliente

1. Abre `config/business.js`.
2. Cambia nombre, textos, teléfono, WhatsApp, dirección y horario.
3. Cambia colores en `colors`.
4. Actualiza servicios y testimonios.
5. Reemplaza las imágenes placeholder dentro de `assets/`.
6. En `index.html`, reemplaza los bloques de "MAPA" por el embed de Google Maps cuando tengas la dirección final.
7. Prueba en móvil y escritorio.
8. Haz commit y push a GitHub.
9. Conecta el repositorio a Cloudflare Pages.

## WhatsApp

`phone` debe contener el número internacional sin `+`, espacios ni guiones.

Ejemplo México:
`524421234567`

## Siguiente mejora comercial

Puedes crear carpetas/ramas por nicho:

- `dentista-template`
- `taller-template`
- `barber-template`
- `inmobiliaria-template`

Mantén la estructura de componentes y cambia principalmente `config/business.js`, textos e imágenes.
