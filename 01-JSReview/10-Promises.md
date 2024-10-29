Em JavaScript, **Promises** são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. Elas são essenciais para lidar com operações assíncronas de forma mais organizada, facilitando a leitura e o tratamento de erros em operações que demoram algum tempo, como chamadas de APIs, temporizadores e manipulação de arquivos.

### Estrutura Básica de uma Promise

Uma Promise possui três estados possíveis:

1. **Pending** (pendente): A operação ainda não foi concluída.
2. **Fulfilled** (resolvida): A operação foi concluída com sucesso.
3. **Rejected** (rejeitada): A operação falhou.

A sintaxe básica para criar uma Promise é a seguinte:

```javascript
const promessa = new Promise((resolve, reject) => {
  // Operação assíncrona aqui...
  if (/* sucesso */) {
    resolve(valor); // Chamado se a operação for bem-sucedida
  } else {
    reject(erro); // Chamado se a operação falhar
  }
});
```

- `resolve(valor)`: É chamado quando a operação é bem-sucedida.
- `reject(erro)`: É chamado quando a operação falha.

### Exemplo Básico de Uma Promise

Aqui, vamos simular uma operação assíncrona que demora 2 segundos para concluir:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Falha na operação.");
    }
  }, 2000);
});

// Consumindo a Promise
minhaPromise
  .then((resultado) => {
    console.log(resultado); // Saída: 'Operação concluída com sucesso!'
  })
  .catch((erro) => {
    console.error(erro); // Se a Promise for rejeitada, imprime o erro
  });
```

### Métodos Importantes das Promises

#### `.then()`

O método `.then()` é chamado quando a Promise é resolvida com sucesso. Ele recebe uma função de callback com o valor retornado pelo `resolve()`.

```javascript
minhaPromise.then((resultado) => {
  console.log("Sucesso:", resultado);
});
```

#### `.catch()`

O método `.catch()` é usado para capturar erros quando a Promise é rejeitada, recebendo uma função de callback com o valor do `reject()`.

```javascript
minhaPromise.catch((erro) => {
  console.error("Erro:", erro);
});
```

#### `.finally()`

O método `.finally()` é executado independentemente do resultado da Promise (seja `resolve` ou `reject`). Ele é útil para executar algo sempre ao final da operação, como ocultar um indicador de carregamento.

```javascript
minhaPromise.finally(() => {
  console.log("Operação concluída.");
});
```

### Exemplo Completo

```javascript
const carregarDados = new Promise((resolve, reject) => {
  const sucesso = true;
  setTimeout(() => {
    if (sucesso) {
      resolve("Dados carregados com sucesso!");
    } else {
      reject("Erro ao carregar dados.");
    }
  }, 3000);
});

carregarDados
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error(erro);
  })
  .finally(() => {
    console.log("Finalizando operação.");
  });
```

### Promises com Várias Operações Assíncronas

JavaScript oferece métodos para lidar com múltiplas Promises ao mesmo tempo:

#### `Promise.all()`

Executa várias Promises simultaneamente e retorna um array com os resultados, **apenas se todas forem resolvidas**. Se uma Promise falhar, `Promise.all` rejeitará todas as demais.

```javascript
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
const p3 = Promise.resolve(42);

Promise.all([p1, p2, p3])
  .then((valores) => {
    console.log(valores); // Saída: [3, 'foo', 42]
  })
  .catch((erro) => {
    console.error("Erro em uma das Promises", erro);
  });
```

#### `Promise.race()`

Retorna o resultado da primeira Promise que for concluída, seja ela resolvida ou rejeitada.

```javascript
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "Primeira"));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, "Segunda"));

Promise.race([p1, p2]).then((valor) => {
  console.log(valor); // Saída: 'Segunda', pois p2 termina primeiro
});
```

#### `Promise.allSettled()`

Executa todas as Promises e retorna seus resultados quando **todas estiverem concluídas**, independentemente se foram resolvidas ou rejeitadas. Ele retorna um array com o status de cada Promise.

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.reject("Erro");
const p3 = Promise.resolve(20);

Promise.allSettled([p1, p2, p3]).then((resultados) => {
  console.log(resultados);
  /* Saída:
   [
     { status: 'fulfilled', value: 10 },
     { status: 'rejected', reason: 'Erro' },
     { status: 'fulfilled', value: 20 }
   ]
  */
});
```

### Promises com Funções Assíncronas (`async` / `await`)

Funções `async` e `await` tornam o uso de Promises mais legível, permitindo escrever código assíncrono que parece síncrono. O `await` pausa a execução até que a Promise seja resolvida ou rejeitada.

```javascript
async function carregar() {
  try {
    const dados = await carregarDados; // espera a Promise 'carregarDados' ser resolvida
    console.log(dados);
  } catch (erro) {
    console.error("Erro:", erro);
  } finally {
    console.log("Operação concluída.");
  }
}

carregar();
```

### Resumo

- **Promise**: Representa uma operação assíncrona.
- **`resolve`**: Define o valor de sucesso da operação.
- **`reject`**: Define o valor de falha da operação.
- **`.then()`**: Executado ao sucesso da Promise.
- **`.catch()`**: Executado ao erro da Promise.
- **`.finally()`**: Executado ao final, independentemente do sucesso ou falha.
- **`async/await`**: Simplifica o uso de Promises, tornando o código assíncrono mais fácil de ler e manter.
