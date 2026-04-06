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
        title: "BurgerHouse",
        category: "Landing para restaurante",
        year: "2026",
        summary:
            "Landing page para una hamburguesería artesanal con diseño inmersivo, secciones modulares para menú y carta, navegación intuitiva y despliegue optimizado en Vercel.",
        challenge:
            "Presentar una marca gastronómica con una experiencia rápida y atractiva, manteniendo una estructura simple de actualizar y lista para producción.",
        solution:
            "Landing estática construida con Astro y Tailwind CSS, secciones modulares, datos desacoplados para menú y una ruta dedicada para la carta completa.",
        result:
            "Proyecto publicado con buena base de performance, assets optimizados y una URL pública lista para compartir con clientes o usar como caso de portafolio.",
        technologies: ["Astro", "TypeScript", "Tailwind", "Vercel"],
        image: "/images/burgerhouse-preview.png",
        link: "https://hamburguer-livid.vercel.app",
        linkLabel: "Ver sitio",
        featured: true,
    },
    {
        title: "Mi portafolio",
        category: "Portafolio personal",
        year: "2025",
        summary:
            "Sitio personal diseñado desde cero con estética brutalist, tipografía expresiva, animaciones CSS puras y optimización máxima en rendimiento y SEO.",
        challenge:
            "Crear una presencia web que comunique quién soy y qué hago sin depender de templates genéricos ni frameworks pesados.",
        solution:
            "Arquitectura estática con Astro y Tailwind, tipografía expresiva, animaciones CSS puras y formulario de contacto integrado con Formspree.",
        result:
            "100 en Lighthouse, carga en menos de 1s, diseño memorable que refleja mi enfoque técnico y visual como desarrollador.",
        technologies: ["Astro", "TypeScript", "Tailwind", "Formspree"],
        image: "/images/portafolio-preview.png",
        link: "https://angozero.github.io",
        linkLabel: "Ver sitio",
        featured: true,
    },
];

export const featuredProjects = projects.filter((project) => project.featured);
