import "../../global.css";
import styles from "./home.module.css";
import { Header } from "../../Components/Header";
import logo from "../../assets/logo.png";
import { ItemList } from "../../Components/ItemList";
function App() {
  return (
    <>
      <Header />
      <main className={styles.conteudo}>
        <img className={styles.logo} src={logo} alt="logo background" />
        <section className={styles.info}>
          <div>
            <input name="user" type="text" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className={styles.perfil}>
            <img src="" alt="" className={styles.profile} />
            <div>
              <h3>Nome</h3>
              <span>seilar</span>
              <p>Seilar man</p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Repositorios</h4>
            <ItemList title="teste1" desc="teste2" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
