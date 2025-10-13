import type { TaskStatus } from "../../features/tasks/types";
import styles from "./Toolbar.module.css";

type SortKey = "fecha-asc" | "fecha-desc" | "titulo";
type StatusAll = TaskStatus | "todos";
type TagAll = string | "todas";

interface ToolbarProps {
  query: string;
  setQuery: (v: string) => void;
  status: StatusAll;
  setStatus: (v: StatusAll) => void;
  tag: TagAll;
  setTag: (v: TagAll) => void;
  sort: SortKey;
  setSort: (v: SortKey) => void;
  allTags: string[];
}

export default function Toolbar({
  query, setQuery,
  status, setStatus,
  tag, setTag,
  sort, setSort,
  allTags,
}: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <input
        className={styles.input}
        type="search"
        placeholder="Buscar…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className={styles.select}
        value={status}
        onChange={(e) => setStatus(e.target.value as StatusAll)}
      >
        <option value="todos">Todos</option>
        <option value="pendiente">Pendiente</option>
        <option value="en-progreso">En progreso</option>
        <option value="completada">Completada</option>
      </select>

      <select
        className={styles.select}
        value={tag}
        onChange={(e) => setTag(e.target.value as TagAll)}
      >
        <option value="todas">Todas</option>
        {allTags.map((t) => (
          <option key={t} value={t}>#{t}</option>
        ))}
      </select>

      <select
        className={styles.select}
        value={sort}
        onChange={(e) => setSort(e.target.value as SortKey)}
      >
        <option value="fecha-desc">Fecha ↓</option>
        <option value="fecha-asc">Fecha ↑</option>
        <option value="titulo">Título A–Z</option>
      </select>
    </div>
  );
}
