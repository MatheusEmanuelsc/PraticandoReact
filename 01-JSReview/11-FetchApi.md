A **Fetch API** permite fazer requisições HTTP de maneira assíncrona em JavaScript, sendo uma alternativa moderna ao `XMLHttpRequest`. A Fetch API é baseada em **Promises** e facilita a integração de dados externos em aplicações web.

### Estrutura Básica de `fetch()`

A função `fetch()` recebe pelo menos um parâmetro, a URL, e retorna uma **Promise** que resolve para uma resposta `Response`. Caso a requisição falhe, a Promise é rejeitada.

```javascript
fetch(url)
  .then((response) => {
    // Verifica se a resposta está ok (status 200-299)
    if (!response.ok) throw new Error("Erro na requisição");
    return response.json(); // Converte para JSON
  })
  .then((data) => console.log(data)) // Manipula os dados obtidos
  .catch((error) => console.error("Erro:", error)); // Captura erros
```

### Requisição GET (Padrão)

A requisição GET é o método padrão ao usar `fetch()`, bastando passar a URL como argumento.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));
```

### Requisição POST

Para uma requisição POST, onde dados são enviados ao servidor, usamos um objeto `options` com o método `POST`, cabeçalhos (opcionais), e o corpo da requisição. O `body` deve ser uma string, geralmente JSON.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Título do Post",
    body: "Conteúdo do Post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));
```

### Manipulando a Resposta

A resposta de `fetch()` é um objeto `Response`, que traz diversos métodos para lidar com o conteúdo:

- `.json()`: Converte para JSON (frequentemente usado em APIs).
- `.text()`: Converte a resposta para texto.
- `.blob()`: Converte para um objeto `Blob` (útil para manipulação de arquivos).
- `.formData()`: Converte para `FormData`, útil em formulários.

### Exemplo Completo de Resposta com `then()`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro ao buscar os dados");
    }
  })
  .then((data) => console.log("Dados:", data))
  .catch((error) => console.error("Erro:", error));
```

### Fetch com `async/await`

A combinação de `fetch()` com `async/await` deixa o código mais claro e legível:

```javascript
async function buscarDados() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) throw new Error("Erro ao buscar dados");
    const data = await response.json();
    console.log("Dados:", data);
  } catch (error) {
    console.error("Erro:", error);
  }
}

buscarDados();
```

### Exemplo de Requisição PUT

Requisição PUT para atualizar dados no servidor:

```javascript
async function atualizarPost(id, dadosAtualizados) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAtualizados),
      }
    );

    if (!response.ok) throw new Error("Erro na atualização");
    const data = await response.json();
    console.log("Dados Atualizados:", data);
  } catch (error) {
    console.error("Erro:", error);
  }
}

atualizarPost(1, {
  title: "Novo Título",
  body: "Conteúdo Atualizado",
  userId: 1,
});
```

### Exemplo de Requisição DELETE

Para deletar dados, usamos o método DELETE:

```javascript
async function deletarPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Erro ao deletar o post");
    console.log("Post deletado com sucesso");
  } catch (error) {
    console.error("Erro:", error);
  }
}

deletarPost(1);
```

### Configurações Comuns no `fetch()`

- `method`: Define o método HTTP (GET, POST, PUT, DELETE).
- `headers`: Especifica cabeçalhos adicionais como `Content-Type` e tokens de autenticação.
- `body`: Define o corpo da requisição para métodos como POST e PUT, geralmente em JSON ou `FormData`.

### Resumo

A Fetch API em JavaScript é uma forma versátil e moderna de realizar requisições HTTP, simplificando a manipulação de dados assíncronos com:

- **`fetch(url, options)`** para iniciar uma requisição.
- **`then()`** e **`catch()`** para tratar respostas e erros.
- **`async/await`** para tornar o código mais legível.

Essa API é amplamente utilizada para comunicação com servidores e APIs em tempo real e oferece integração fácil com formatos como JSON.
