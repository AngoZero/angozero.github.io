export type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: "¿Qué incluye un sistema a la medida?",
        answer:
            "Diseño, desarrollo, autenticación, roles, gestión de información y paneles operativos según tu flujo.",
    },
    {
        question: "¿Cuánto tarda un proyecto?",
        answer:
            "Depende del alcance. Proyectos pequeños pueden tomar 2-4 semanas; sistemas completos, 6-12 semanas.",
    },
    {
        question: "¿Trabajas con equipos internos?",
        answer:
            "Sí, puedo integrarme a tu equipo o trabajar de forma independiente con entregas semanales.",
    },
    {
        question: "¿Ofreces mantenimiento?",
        answer:
            "Sí, con planes mensuales para soporte, mejoras y nuevas funcionalidades.",
    },
];
