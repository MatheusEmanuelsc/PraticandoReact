# Resumo sobre Axios no React

## Índice

1. [Introdução ao Axios](#introdução-ao-axios)
2. [Instalação](#instalação)
3. [Métodos Principais do Axios](#métodos-principais-do-axios)
4. [Uso Básico no React](#uso-básico-no-react)
5. [Configuração de Requisições](#configuração-de-requisições)
6. [Tratamento de Respostas e Erros](#tratamento-de-respostas-e-erros)
7. [Exemplo Completo no React](#exemplo-completo-no-react)
8. [Considerações Finais](#considerações-finais)

---

## Introdução ao Axios

**Axios** é uma biblioteca de cliente HTTP que facilita fazer requisições para APIs em aplicações JavaScript, incluindo React. Ela usa Promises, o que permite um gerenciamento mais simples das operações assíncronas.

## Instalação

Para instalar o Axios em um projeto React, use o npm ou yarn:

```bash
npm install axios
```

ou

```bash
yarn add axios
```

## Métodos Principais do Axios

Axios suporta vários métodos HTTP, que são usados para realizar diferentes operações:

- **GET**: Recupera dados de um servidor.

  ```javascript
  axios.get("/api/dados");
  ```

- **POST**: Envia dados para um servidor.

  ```javascript
  axios.post("/api/dados", { nome: "Exemplo" });
  ```

- **PUT**: Atualiza dados existentes.

  ```javascript
  axios.put("/api/dados/1", { nome: "Atualizado" });
  ```

- **PATCH**: Atualiza parcialmente dados existentes.

  ```javascript
  axios.patch("/api/dados/1", { nome: "Parcialmente Atualizado" });
  ```

- **DELETE**: Remove dados do servidor.
  ```javascript
  axios.delete("/api/dados/1");
  ```

## Uso Básico no React

Para utilizar o Axios no React, você pode fazer requisições dentro de um componente, geralmente no hook `useEffect` para buscar dados quando o componente é montado.

```javascript
import axios from "axios";

const MeuComponente = () => {
  const buscarDados = async () => {
    try {
      const resposta = await axios.get("https://api.exemplo.com/dados");
      console.log(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  return <div>Verifique o console para os dados.</div>;
};
```

## Configuração de Requisições

Você pode passar configurações adicionais, como headers e timeout, diretamente nas requisições.

```javascript
const config = {
  headers: {
    Authorization: "Bearer seu_token",
  },
};

const resposta = await axios.get("https://api.exemplo.com/dados", config);
```

## Tratamento de Respostas e Erros

O Axios permite que você trate respostas e erros de forma eficaz. A resposta contém dados úteis, enquanto os erros podem ser capturados e tratados.

```javascript
try {
  const resposta = await axios.get("https://api.exemplo.com/dados");
  console.log(resposta.data);
} catch (erro) {
  if (erro.response) {
    console.error("Erro na resposta:", erro.response.data);
  } else {
    console.error("Erro desconhecido:", erro.message);
  }
}
```

## Exemplo Completo no React

Aqui está um exemplo mais completo que ilustra como usar Axios em um componente React, incluindo tratamento de erros e uso de métodos diferentes:

```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

const MeuComponente = () => {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await axios.get("https://api.exemplo.com/dados");
        setDados(resposta.data);
      } catch (erro) {
        setErro("Erro ao buscar os dados.");
      }
    };

    buscarDados();
  }, []);

  const adicionarDados = async () => {
    try {
      const novaResposta = await axios.post("https://api.exemplo.com/dados", {
        nome: "Novo",
      });
      console.log("Dados adicionados:", novaResposta.data);
    } catch (erro) {
      console.error("Erro ao adicionar dados:", erro);
    }
  };

  if (erro) return <div>{erro}</div>;
  if (!dados) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Dados:</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
      <button onClick={adicionarDados}>Adicionar Dados</button>
    </div>
  );
};

export default MeuComponente;
```

## Considerações Finais

Axios é uma ferramenta poderosa para fazer requisições HTTP em aplicações React. Sua facilidade de uso, suporte a diversos métodos HTTP e tratamento eficiente de erros tornam o trabalho com APIs mais simples e intuitivo. Experimente integrá-lo em seus projetos para gerenciar chamadas de API de forma eficaz.

-
