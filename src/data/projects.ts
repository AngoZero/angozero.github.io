export type Project = {
    title: string;
    description: string;
    technologies: string[];
    image: string | null;
    link: string;
};

export const projects: Project[] = [
    {
        title: "Convertidor SQL a Laravel",
        description:
            "Aplicación de escritorio que convierte migraciones de SQL, PostgreSQL y SQL Server a formato de migraciones de Laravel.",
        technologies: ["React", "TypeScript", "Electron", "Vite", "Tailwind"],
        image: null,
        link: "https://github.com/AngoZero/convertidor-sql",
    },
    {
        title: "Gamir",
        description:
            "Landing page de alto rendimiento diseñada con arquitectura de islas para tiempos de carga instantáneos y SEO optimizado.",
        technologies: ["Astro", "Tailwind", "TypeScript"],
        image: null,
        link: "https://angozero.github.io/gamir/",
    },
];
