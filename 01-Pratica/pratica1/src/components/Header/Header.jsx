import styles from "./styles.module.css";
import logo from "../../assets/ignite-logo.svg";
export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
    </div>
  );
}
