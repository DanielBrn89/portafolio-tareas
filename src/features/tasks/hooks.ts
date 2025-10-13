import { useMemo } from "react";
import type { TaskStatus } from "./types";
import { useTasksContext } from "./TasksContext";

export function useTasks() {
  const { state, dispatch } = useTasksContext();
  const { items, query, status, tag, sort, loading } = state;

  const allTags = useMemo(
    () => Array.from(new Set(items.flatMap((t) => t.tags))).sort((a, b) => a.localeCompare(b)),
    [items]
  );

  const filtered = useMemo(() => {
    let out = [...items];

    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tg) => tg.toLowerCase().includes(q))
      );
    }
    if (status !== "todos") out = out.filter((t) => t.status === status);
    if (tag !== "todas") out = out.filter((t) => t.tags.includes(tag));

    const byDate = (a?: string, b?: string) => (a ? new Date(a).getTime() : 0) - (b ? new Date(b).getTime() : 0);

    switch (sort) {
      case "fecha-asc":  out.sort((a, b) => byDate(a.dueDate, b.dueDate)); break;
      case "fecha-desc": out.sort((a, b) => byDate(b.dueDate, a.dueDate)); break;
      case "titulo":     out.sort((a, b) => a.title.localeCompare(b.title)); break;
    }
    return out;
  }, [items, query, status, tag, sort]);

  const setQuery  = (v: string) => dispatch({ type: "SET_QUERY",  payload: v });
  const setStatus = (v: TaskStatus | "todos") => dispatch({ type: "SET_STATUS", payload: v });
  const setTag    = (v: string | "todas") => dispatch({ type: "SET_TAG",    payload: v });
  const setSort   = (v: "fecha-asc" | "fecha-desc" | "titulo") =>
    dispatch({ type: "SET_SORT", payload: v });

  return { loading, filtered, allTags, query, status, tag, sort, setQuery, setStatus, setTag, setSort };
}
