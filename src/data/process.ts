export type ProcessStep = {
    title: string;
    description: string;
    detail: string;
};

export const processSteps: ProcessStep[] = [
    {
        title: "Descubrimiento",
        description: "Definimos objetivo, alcance y prioridades.",
        detail: "Mapa de flujo, requerimientos y riesgos.",
    },
    {
        title: "Diseño & Arquitectura",
        description: "Estructura visual y decisiones técnicas claras.",
        detail: "Stack, estructura y plan de entregables.",
    },
    {
        title: "Desarrollo",
        description: "Implementación por entregas cortas.",
        detail: "Entregas verificables y feedback continuo.",
    },
    {
        title: "Lanzamiento",
        description: "Deploy, monitoreo y soporte inicial.",
        detail: "Documentación y mejoras posteriores.",
    },
];
