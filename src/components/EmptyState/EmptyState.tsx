
import styles from "./EmptyState.module.css";

export default function EmptyState({ title = "Sin resultados", hint = "Ajusta los filtros o busca otro término." }) {
  return (
    <div className={styles.empty}>
      <h3>{title}</h3>
      <p>{hint}</p>
    </div>
  );
}
