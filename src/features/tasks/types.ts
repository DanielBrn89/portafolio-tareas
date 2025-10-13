export type TaskStatus = "pendiente" | "en-progreso" | "completada";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  tags: string[];
  dueDate?: string;
  link?: string;
  image?: string;
}

export const statusLabel: Record<TaskStatus, string> = {
  pendiente: "Pendiente",
  "en-progreso": "En progreso",
  completada: "Completada",
};
