import { Header } from "../../components/Header";
import logo from "../../logo.webp";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={logo} className="background" alt="background app" />
        <div className="info">
          <input name="user" placeholder="@username"></input>
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
