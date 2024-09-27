### Introdução ao `fetch`

O `fetch` é uma função JavaScript que permite buscar dados de uma URL, como de uma API. Em um projeto React, ele é frequentemente usado para buscar dados e exibi-los na interface do usuário.

Agora, vou te guiar pelo processo completo, passo a passo, para que você veja como fazer isso em um projeto React com Vite.

---

### 1. Criando um Projeto React com Vite

O primeiro passo é criar um projeto utilizando o Vite. Para isso, siga os passos abaixo:

1. **Abra seu terminal** e execute o comando para criar um projeto React com Vite:

   ```bash
   npm create vite@latest fetch-tutorial --template react
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd fetch-tutorial
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Execute o projeto**:

   ```bash
   npm run dev
   ```

Agora você tem um projeto React criado com Vite e rodando localmente. Vamos continuar com a implementação do `fetch`.

---

### 2. Criando um Componente para Fazer a Requisição

Agora vamos criar um componente onde vamos implementar o `fetch`. Esse componente será responsável por buscar dados de uma API e exibi-los na interface.

1. **Abra o arquivo `App.jsx`** (ou crie um novo componente se preferir) e comece com a estrutura básica:

```jsx
import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  return (
    <div>
      <h1>Exemplo de Busca de Dados</h1>
    </div>
  );
}

export default DataFetchingComponent;
```

Aqui, temos um componente simples que vai exibir os dados após fazermos o `fetch`.

---

### 3. Fazendo a Requisição com `fetch`

Agora vamos adicionar a funcionalidade de buscar dados de uma API. No nosso exemplo, vamos utilizar uma API pública chamada **JSONPlaceholder**, que retorna uma lista de posts.

```jsx
import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState([]); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando
  const [error, setError] = useState(null); // Estado para armazenar erros, se houver

  useEffect(() => {
    // Função que busca os dados da API
    const fetchData = async () => {
      try {
        setLoading(true); // Indica que o carregamento começou
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // Faz a requisição

        // Se a resposta não for bem-sucedida, lança um erro
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }

        const data = await response.json(); // Converte a resposta para JSON
        setData(data); // Atualiza o estado com os dados da API
      } catch (err) {
        setError(err.message); // Atualiza o estado com a mensagem de erro, se houver
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchData(); // Chama a função de busca de dados
  }, []); // O array vazio [] garante que a função seja executada apenas quando o componente for montado

  // Exibindo os dados, erros ou estado de carregamento
  return (
    <div>
      <h1>Exemplo de Busca de Dados</h1>
      {loading && <p>Carregando...</p>} {/* Exibe "Carregando..." enquanto está buscando dados */}
      {error && <p>Erro: {error}</p>}{" "}
      {/* Exibe a mensagem de erro, se houver */}
      {/* Exibe a lista de dados quando a requisição é bem-sucedida */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Exibe o título de cada post
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
```

### Explicação Detalhada

- **`useState`**: Criamos três estados:

  - `data`: Para armazenar os dados que serão retornados da API.
  - `loading`: Para indicar se os dados ainda estão sendo buscados.
  - `error`: Para capturar e exibir erros que possam acontecer durante a requisição.

- **`useEffect`**: Esse hook é usado para realizar a requisição assim que o componente for montado. Colocamos a lógica de busca de dados dentro dele para garantir que ela aconteça apenas uma vez.

- **`fetch`**: Faz a requisição HTTP para a URL da API (`https://jsonplaceholder.typicode.com/posts`).

- **Erro e Carregamento**:

  - Utilizamos um bloco `try-catch` para capturar erros durante a requisição.
  - Atualizamos o estado de `loading` para controlar quando a página está carregando dados ou não.

- **Exibindo os Dados**:
  - Se os dados forem carregados com sucesso, mapeamos o array `data` e exibimos os títulos dos posts.

---

### 4. Exibindo os Dados na Interface

No retorno do componente, verificamos três coisas:

1. **Carregando**: Se os dados ainda estão sendo buscados, mostramos a mensagem "Carregando...".
2. **Erro**: Se ocorrer algum erro durante a requisição, exibimos a mensagem de erro.
3. **Dados**: Quando os dados são carregados com sucesso, exibimos uma lista com os títulos dos posts.

---

### Conclusão

Neste tutorial, você aprendeu como fazer uma requisição HTTP utilizando o `fetch` em um projeto React criado com Vite. Exploramos desde a criação do projeto até a exibição dos dados na interface, com uma explicação detalhada sobre cada passo e o tratamento de erros e carregamento.

Agora você pode buscar dados de APIs e exibi-los de forma eficiente em seus projetos React!
