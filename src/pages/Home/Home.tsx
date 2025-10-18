import { useState } from "react";
import { useTasks } from "../../features/tasks/hooks";
import TaskCard from "../../components/TaskCard/TaskCard";
import Toolbar from "../../components/Toolbar/Toolbar";
import Modal from "../../components/Modal/Modal";
import EmptyState from "../../components/EmptyState/EmptyState";
import type { Task } from "../../features/tasks/types";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Home.module.css";

export default function Home() {
  const { loading, filtered, allTags, query, status, tag, sort, setQuery, setStatus, setTag, setSort } = useTasks();
  const [current, setCurrent] = useState<Task | undefined>();
  const [open, setOpen] = useState(false);

  const handleOpen = (t: Task) => { setCurrent(t); setOpen(true); };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="/logoumg.png"
            alt="Logo"
            width={56}
            height={56}
            loading="lazy"
          />
          <div>
            <h1>Portafolio de Tareas</h1>
        
          </div>
        </div>
        <ProfileCard />
      </header>

      <Toolbar
        query={query}
        setQuery={setQuery}
        status={status}
        setStatus={setStatus}
        tag={tag}
        setTag={setTag}
        sort={sort}
        setSort={setSort}
        allTags={allTags}
      />

      {loading ? (
        <p className={styles.loading}>Cargando…</p>
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <main className={styles.grid}>
          {filtered.map((t) => (
            <TaskCard key={t.id} task={t} onOpen={handleOpen} />
          ))}
        </main>
      )}

      <Modal open={open} onClose={() => setOpen(false)} task={current} />
    </div>
  );
}
