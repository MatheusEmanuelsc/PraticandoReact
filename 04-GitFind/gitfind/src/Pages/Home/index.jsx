import "../../global.css";
import styles from "./home.module.css";
import { Header } from "../../Components/Header";
import logo from "../../assets/logo.png";
function App() {
  return (
    <>
      <Header />
      <main className={styles.conteudo}>
        <img className={styles.logo} src={logo} alt="logo background" />
        <section className={styles.info}></section>
      </main>
    </>
  );
}

export default App;
