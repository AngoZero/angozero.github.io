export interface Project {
    title: string;
    category: string;
    year: string;
    summary: string;
    challenge: string;
    solution: string;
    result: string;
    technologies: string[];
    image: string | null;
    link: string;
    linkLabel: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        title: "angozero.github.io",
        category: "Portafolio personal",
        year: "2025",
        summary:
            "Mi propio sitio web, diseñado desde cero con estética brutalist y enfoque en rendimiento, SEO y claridad de propuesta de valor.",
        challenge:
            "Crear una presencia web que comunique quién soy y qué hago sin depender de templates genéricos ni frameworks pesados.",
        solution:
            "Arquitectura estática con Astro y Tailwind, tipografía expresiva, animaciones CSS puras y formulario de contacto integrado con Formspree.",
        result:
            "100 en Lighthouse, carga en menos de 1s, diseño memorable que refleja mi enfoque técnico y visual como desarrollador.",
        technologies: ["Astro", "TypeScript", "Tailwind", "Formspree"],
        image: null,
        link: "https://angozero.github.io",
        linkLabel: "Ver sitio",
        featured: true,
    },
];

export const featuredProjects = projects.filter((project) => project.featured);
