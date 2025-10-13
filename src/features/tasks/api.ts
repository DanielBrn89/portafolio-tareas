import type { Task } from "./types";
import { SAMPLE_TASKS } from "./data";

export async function listTasks(): Promise<Task[]> {
  await new Promise((r) => setTimeout(r, 150));
  return [...SAMPLE_TASKS];
}
