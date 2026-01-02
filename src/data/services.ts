export type Service = {
    title: string;
    description: string;
    outcomes: string[];
};

export const services: Service[] = [
    {
        title: "Software a la medida",
        description:
            "Sistemas completos para operaciones reales: usuarios, roles, flujos y reportes.",
        outcomes: [
            "Alta y gestión de usuarios",
            "Paneles operativos y dashboards",
            "Automatizaciones internas",
        ],
    },
    {
        title: "Aplicaciones web & portales",
        description:
            "Productos web rápidos y escalables para clientes y equipos internos.",
        outcomes: [
            "Arquitectura moderna y mantenible",
            "Integraciones con servicios externos",
            "Seguridad y control de accesos",
        ],
    },
    {
        title: "Landing pages de alto rendimiento",
        description:
            "Diseño brutalista con foco en conversión, SEO y tiempos de carga.",
        outcomes: [
            "Core Web Vitals optimizados",
            "Estructura SEO clara",
            "Iteración rápida de contenido",
        ],
    },
];
