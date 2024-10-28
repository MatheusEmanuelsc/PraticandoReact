import styles from "./styles.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://gravatar.com/avatar/0ae5d5a8047a9915e940bb2010ec803b?s=150&d=mp&r=x"
        />
        <strong> Jao Bao</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
