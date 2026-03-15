export type Service = {
    title: string;
    description: string;
    outcomes: string[];
};

export const services: Service[] = [
    {
        title: "Software a la medida",
        description:
            "Sistemas completos que se adaptan a tu flujo de trabajo real, no al revés.",
        outcomes: [
            "Gestión centralizada de información",
            "Paneles operativos y dashboards",
            "Automatización de procesos clave",
        ],
    },
    {
        title: "Aplicaciones web & portales",
        description:
            "Productos web rápidos, escalables y listos para crecer contigo.",
        outcomes: [
            "Arquitectura moderna y mantenible",
            "Integraciones con APIs y servicios externos",
            "Seguridad y control de accesos",
        ],
    },
    {
        title: "Landing pages de alto rendimiento",
        description:
            "Páginas de aterrizaje con foco en conversión, SEO y velocidad de carga.",
        outcomes: [
            "Core Web Vitals optimizados",
            "Estructura SEO clara",
            "Iteración rápida de contenido",
        ],
    },
];
