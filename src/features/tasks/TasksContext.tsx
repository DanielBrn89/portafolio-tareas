import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { Task, TaskStatus } from "./types";
import { listTasks } from "./api";

interface TasksState {
  items: Task[];
  loading: boolean;
  query: string;
  status: TaskStatus | "todos";
  tag: string | "todas";
  sort: "fecha-asc" | "fecha-desc" | "titulo";
}

const initialState: TasksState = {
  items: [],
  loading: false,
  query: "",
  status: "todos",
  tag: "todas",
  sort: "fecha-desc",
};

type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: Task[] }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_STATUS"; payload: TasksState["status"] }
  | { type: "SET_TAG"; payload: TasksState["tag"] }
  | { type: "SET_SORT"; payload: TasksState["sort"] };

function reducer(state: TasksState, action: Action): TasksState {
  switch (action.type) {
    case "LOAD_START":   return { ...state, loading: true };
    case "LOAD_SUCCESS": return { ...state, loading: false, items: action.payload };
    case "SET_QUERY":    return { ...state, query: action.payload };
    case "SET_STATUS":   return { ...state, status: action.payload };
    case "SET_TAG":      return { ...state, tag: action.payload };
    case "SET_SORT":     return { ...state, sort: action.payload };
    default:             return state;
  }
}

const TasksCtx = createContext<{ state: TasksState; dispatch: React.Dispatch<Action> } | null>(null);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOAD_START" });
      const data = await listTasks();
      dispatch({ type: "LOAD_SUCCESS", payload: data });
    })();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <TasksCtx.Provider value={value}>{children}</TasksCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasksContext() {
  const ctx = useContext(TasksCtx);
  if (!ctx) throw new Error("useTasksContext debe usarse dentro de <TasksProvider>");
  return ctx;
}
