import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside></aside>
        <main></main>
      </div>
    </div>
  );
}
