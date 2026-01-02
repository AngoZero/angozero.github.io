# AngoZero Portfolio

Portafolio personal construido con Astro y Tailwind CSS. Enfocado en performance, diseño limpio y una estructura clara para crecer el contenido con facilidad.

## Stack

- Astro
- Tailwind CSS
- TypeScript

## Estructura

```text
src/
├── components/
│   └── sections/
├── data/
├── layouts/
├── pages/
└── styles/
```

## Datos editables

- `src/data/site.ts`: metadatos del sitio (titulo, descripcion, autor)
- `src/data/projects.ts`: lista de proyectos
- `src/data/technologies.ts`: categorias y tecnologias

## Scripts

- `npm run dev`: servidor local en `http://localhost:4321`
- `npm run build`: build de produccion
- `npm run preview`: previsualizacion del build
- `npm run astro ...`: comandos del CLI de Astro

## Notas

- El layout base vive en `src/layouts/Layout.astro`
- Las secciones principales estan en `src/components/sections`
