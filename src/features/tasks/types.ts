export type TaskStatus = "pendiente" | "en-progreso" | "completada";

export type Attachment =
  | { type: "pdf"; label: string; url: string }   // ej: "/docs/mi_tarea.pdf"
  | { type: "link"; label: string; url: string }; // ej: "https://mi-demo.com"

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  tags: string[];
  dueDate?: string;
  image?: string;
  // Puedes mantener "link" si quieres un link principal, pero ahora mejor usa attachments
  link?: string;
  attachments?: Attachment[];
}

export const statusLabel: Record<TaskStatus, string> = {
  pendiente: "Pendiente",
  "en-progreso": "En progreso",
  completada: "Completada",
};
