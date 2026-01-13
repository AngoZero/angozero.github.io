export type TechnologyItem = {
    name: string;
    icon: string;
};

export type TechnologyCategory = {
    title: string;
    skills: TechnologyItem[];
};

export const technologyCategories: TechnologyCategory[] = [
    {
        title: "Frontend y diseño UI",
        skills: [
            {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                name: "Tailwind",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "Astro",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
            },
            {
                name: "Vite",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
            },
            {
                name: "jQuery",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
            },
        ],
    },
    {
        title: "Backend y APIs",
        skills: [
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
            {
                name: "Laravel",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
            },
            {
                name: "FastAPI",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            },
            {
                name: "Prisma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
            },
            {
                name: "REST APIs",
                icon: "https://www.svgrepo.com/show/331776/network-interface.svg",
            },
        ],
    },
    {
        title: "Lenguajes",
        skills: [
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
                name: "C#",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            },
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
                name: "PHP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            },
        ],
    },
    {
        title: "Móvil y escritorio",
        skills: [
            {
                name: "React Native",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Expo",
                icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
            },
            {
                name: "Electron",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
            },
            {
                name: "NW.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nwjs/nwjs-original.svg",
            },
        ],
    },
    {
        title: "Datos y DevOps",
        skills: [
            {
                name: "SQL Server",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            },
            {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
                name: "MySQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
        ],
    },
    {
        title: "IA & Automatización",
        skills: [
            {
                name: "Claude API",
                icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/anthropic.svg",
            },
            {
                name: "OpenAI API",
                icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
            },
            {
                name: "Gemini API",
                icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlegemini.svg",
            },
        ],
    },
];
