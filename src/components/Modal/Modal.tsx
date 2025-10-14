import { useEffect } from "react";
import type { Task } from "../../features/tasks/types";
import { formatDate } from "../../utils/date";
import styles from "./Modal.module.css";

export default function Modal({ open, onClose, task }: { open: boolean; onClose: () => void; task?: Task; }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !task) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h3>{task.title}</h3>
          <button className={styles.btnGhost} onClick={onClose} aria-label="Cerrar">✕</button>
        </header>

        {task.image && (
          <div className={styles.media}>
           
            <img src={task.image} alt={task.title} />
          </div>
        )}

        <div className={styles.content}>
          <p className={styles.desc}>{task.description}</p>

          {!!task.attachments?.length && (
            <div className={styles.attachments}>
              {task.attachments.map((a, i) => (
                <a key={i} className={styles.btn} href={a.url} target="_blank" rel="noreferrer">
                  {a.type === "pdf" ? "📄" : "🔗"} {a.label}
                </a>
              ))}
            </div>
          )}

          <div className={styles.grid}>
            <div><strong>Estado:</strong> {task.status}</div>
            <div><strong>Fecha límite:</strong> {formatDate(task.dueDate)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
