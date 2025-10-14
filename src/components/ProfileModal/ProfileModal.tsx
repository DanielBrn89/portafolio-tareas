import { PROFILE } from "../../features/profile/data";
import styles from "./ProfileModal.module.css";

export default function ProfileModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
        
            <img className={styles.avatar} src={PROFILE.avatarUrl} alt={PROFILE.name} />
            <div>
              <h3 className={styles.name}>{PROFILE.name}</h3>
              <p className={styles.carnet}>Carnet: {PROFILE.carnet}</p>
            </div>
          </div>
          <button className={styles.btnGhost} onClick={onClose} aria-label="Cerrar">✕</button>
        </header>

        <div className={styles.body}>
          {PROFILE.bio && <p className={styles.bio}>{PROFILE.bio}</p>}

          <div className={styles.grid}>
            {PROFILE.email && <div><strong>Correo: </strong><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>}
            {PROFILE.phone && <div><strong>Teléfono: </strong><a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>}
            {PROFILE.location && <div><strong>Ubicación: </strong>{PROFILE.location}</div>}
          </div>

          {PROFILE.skills?.length ? (
            <div className={styles.chips}>
              {PROFILE.skills.map((s) => <span key={s} className={styles.chip}>#{s}</span>)}
            </div>
          ) : null}

          {PROFILE.links?.length ? (
            <div className={styles.links}>
              {PROFILE.links.map((l, i) => (
                <a key={i} className={styles.btn} href={l.url} target="_blank" rel="noreferrer">🔗 {l.label}</a>
              ))}
            </div>
          ) : null}

          {PROFILE.cvUrl && (
            <a className={styles.btnWide} href={PROFILE.cvUrl} target="_blank" rel="noreferrer">
              📄 Ver/descargar CV
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
