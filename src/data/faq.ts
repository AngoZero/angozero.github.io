export type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: "¿Qué incluye un proyecto de software a la medida?",
        answer:
            "Desde el diseño hasta el despliegue: arquitectura, desarrollo, gestión de datos, paneles de control y la lógica que tu operación necesita.",
    },
    {
        question: "¿Cuánto tarda un proyecto?",
        answer:
            "Depende del alcance. Proyectos pequeños pueden tomar 2-4 semanas; sistemas completos, 6-12 semanas.",
    },
    {
        question: "¿Trabajas solo o también con equipos?",
        answer:
            "Ambos. Puedo integrarme a tu equipo existente o llevar el proyecto de forma independiente con entregas en los tiempos que el cliente necesite.",
    },
    {
        question: "¿Ofreces mantenimiento?",
        answer:
            "Sí, con planes mensuales para soporte, mejoras y nuevas funcionalidades.",
    },
];
