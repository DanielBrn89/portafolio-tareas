import type { Task } from "../../features/tasks/types";
import { statusLabel } from "../../features/tasks/types";
import { formatDate } from "../../utils/date";
import styles from "./TaskCard.module.css";

function StatusBadge({ status }: { status: Task["status"] }) {
  return <span className={`${styles.badge} ${styles[`badge--${status}`]}`}>{statusLabel[status]}</span>;
}

function Tag({ label }: { label: string }) {
  return <span className={styles.tag}>#{label}</span>;
}

export default function TaskCard({ task, onOpen }: { task: Task; onOpen: (t: Task) => void }) {
  return (
    <article className={styles.card} role="button" onClick={() => onOpen(task)}>
      {task.image && (
        <div className={styles.media}>
       
          <img src={task.image} alt={task.title} />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.title}>{task.title}</h3>
          <StatusBadge status={task.status} />
        </div>
        <p className={styles.desc}>{task.description}</p>

        {!!task.attachments?.length && (
          <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
            {task.attachments.map((a, i) => (
              <a key={i} className={styles.btnSmall} href={a.url} target="_blank" rel="noreferrer">
                {a.type === "pdf" ? "📄" : "🔗"} {a.label}
              </a>
            ))}
          </div>
        )}

        <div className={styles.meta}>
          <div className={styles.chips}>
            {task.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <span className={styles.due}>{formatDate(task.dueDate)}</span>
        </div>
      </div>
    </article>
  );
}
