import "../../global.css";
import styles from "./home.module.css";
import { Header } from "../../Components/Header";
import logo from "../../assets/logo.png";
import { ItemList } from "../../Components/ItemList";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); // Estado para o input de usuário
  const [currentUser, setCurrentUser] = useState(null); // Estado para armazenar o usuário atual
  const [repos, setRepos] = useState([]); // Estado para armazenar os repositórios

  const handleSearchUser = async () => {
    try {
      // Busca o perfil do usuário
      const userResponse = await fetch(`https://api.github.com/users/${user}`);
      const userData = await userResponse.json();

      if (userData) {
        setCurrentUser(userData); // Armazena o perfil do usuário no estado

        // Busca os repositórios do usuário
        const reposResponse = await fetch(
          `https://api.github.com/users/${user}/repos`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData); // Armazena os repositórios no estado
      } else {
        alert("Usuário não encontrado");
      }
    } catch (error) {
      alert("Erro ao buscar usuário");
    }
  };

  const handleRemoveRepo = (id) => {
    const filteredRepos = repos.filter((repo) => repo.id !== id);
    setRepos(filteredRepos);
  };

  return (
    <>
      <Header />
      <main className={styles.conteudo}>
        <img className={styles.logo} src={logo} alt="logo background" />
        <section className={styles.info}>
          <div>
            <input
              name="user"
              type="text"
              value={user}
              placeholder="@username"
              onChange={(event) => setUser(event.target.value)} // Atualiza o estado do input
            />
            <button onClick={handleSearchUser}>Buscar</button>{" "}
            {/* Chama a função de busca */}
          </div>
          {currentUser?.name ? (
            <>
              <div className={styles.perfil}>
                <img
                  src={currentUser.avatar_url}
                  alt={currentUser.name}
                  className={styles.profile}
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio || "Sem biografia disponível"}</p>
                </div>
              </div>
              <hr />
              <div>
                <h4>Repositórios</h4>
                {repos.length > 0 ? (
                  repos.map((repo) => (
                    <ItemList
                      key={repo.id}
                      title={repo.name}
                      desc={repo.description}
                      onRemove={() => handleRemoveRepo(repo.id)}
                    />
                  ))
                ) : (
                  <p>Nenhum repositório encontrado</p>
                )}
              </div>
            </>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default App;
