import { useState } from "react";
import { PROFILE } from "../../features/profile/data";
import ProfileModal from "../ProfileModal/ProfileModal";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className={styles.card}>
        <button className={styles.avatarWrap} onClick={() => setOpen(true)} title="Ver perfil completo">
          <img className={styles.avatar} src={PROFILE.avatarUrl} alt={PROFILE.name} />
        </button>
        <div className={styles.info}>
          <h3 className={styles.name}>{PROFILE.name}</h3>
          <p className={styles.carnet}>Carnet: {PROFILE.carnet}</p>
          {PROFILE.bio && <p className={styles.bio}>{PROFILE.bio}</p>}
          <button className={styles.btnGhost} onClick={() => setOpen(true)}>Ver perfil</button>
        </div>
      </aside>

      <ProfileModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
