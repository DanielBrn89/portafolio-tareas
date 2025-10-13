import type { Task } from "./types";

export const SAMPLE_TASKS: Task[] = [
  {
    id: "t1",
    title: "Landing de Portafolio",
    description: "Diseñar y codificar una landing minimalista.",
    status: "completada",
    tags: ["React", "UI", "Vite"],
    dueDate: "2025-09-15",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    link: "https://tu-landing.com",
  },
  { id: "t2", title: "API de Tareas", description: "CRUD con auth.", status: "en-progreso", tags: ["API", "Node"], dueDate: "2025-10-20" },
  { id: "t3", title: "Tablero Kanban", description: "Drag & Drop.", status: "pendiente", tags: ["React", "DnD"], dueDate: "2025-11-05" },
  { id: "t4", title: "Sistema de Temas", description: "Light/Dark.", status: "en-progreso", tags: ["CSS"] },
  { id: "t5", title: "Tests E2E", description: "Flujos críticos.", status: "pendiente", tags: ["Testing"] },
];
