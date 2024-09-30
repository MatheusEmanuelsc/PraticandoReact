### Resumo sobre o Hook `useEffect` no React

O `useEffect` é um Hook no React que permite sincronizar componentes com efeitos colaterais, como chamadas a APIs, assinaturas de eventos, ou atualizações manuais no DOM. Ele é essencial quando precisamos executar código que afete diretamente algo fora do fluxo de renderização do React. Abaixo, você encontrará um guia completo sobre o funcionamento do `useEffect`, baseado na documentação oficial do React.

---

### Estrutura Básica

O `useEffect` é chamado dentro de um componente funcional e possui a seguinte estrutura:

```js
useEffect(() => {
  // Efeito colateral aqui (pode ser chamada de API, eventos etc.)

  return () => {
    // Cleanup (opcional), executado quando o efeito é "limpo".
  };
}, [dependências]);
```

1. **Corpo do Efeito**: A função passada para o `useEffect` é executada após o componente ser renderizado.
2. **Função de Cleanup (limpeza)**: Retornar uma função de limpeza é opcional, mas útil para cancelar assinaturas ou limpar recursos quando o componente é desmontado ou o efeito for reexecutado.
3. **Dependências**: O segundo parâmetro é um array de dependências que define quando o efeito deve ser executado novamente. Se alguma dependência mudar, o efeito será reexecutado.

---

### Tipos de Efeitos

- **Sem Dependências**: O `useEffect` roda após cada renderização, pois não foi fornecido um array de dependências. Útil para efeitos que devem ser sincronizados sempre que o componente for atualizado.

  ```js
  useEffect(() => {
    console.log("Renderizado!");
  });
  ```

- **Com Dependências**: Ao incluir um array de dependências, o efeito só é executado quando uma ou mais dependências mudam.

  ```js
  useEffect(() => {
    console.log(`O ID mudou para ${id}`);
  }, [id]);
  ```

- **Efeito Uma Única Vez**: Passar um array vazio como dependência faz com que o `useEffect` execute apenas uma vez, semelhante ao ciclo de vida `componentDidMount`.

  ```js
  useEffect(() => {
    console.log("Montado!");
  }, []);
  ```

---

### Cleanup (Limpeza)

O React executa a função de cleanup de um efeito quando o componente é desmontado ou antes do efeito ser reexecutado. Isso é essencial em casos como assinaturas de eventos ou conexões WebSocket.

Exemplo:

```js
useEffect(() => {
  const connection = createConnection(roomId);
  connection.connect();

  return () => {
    connection.disconnect();
  };
}, [roomId]);
```

Neste exemplo, sempre que o `roomId` mudar, a conexão atual será desconectada, e uma nova será estabelecida.

---

### Casos de Uso Comuns

1. **Chamada de API**: Executar chamadas a uma API e atualizar o estado do componente.

   ```js
   useEffect(() => {
     fetch("/api/dados")
       .then((res) => res.json())
       .then((data) => setDados(data));
   }, []);
   ```

2. **Event Listeners**: Adicionar ou remover ouvintes de eventos, como eventos de rolagem ou redimensionamento da janela.

   ```js
   useEffect(() => {
     const handleResize = () => console.log(window.innerWidth);
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, []);
   ```

3. **Conexões WebSocket**: Estabelecer uma conexão e garantir que ela seja fechada quando o componente for desmontado.

   ```js
   useEffect(() => {
     const socket = new WebSocket("wss://example.com");
     socket.onmessage = (message) => console.log(message.data);

     return () => socket.close();
   }, []);
   ```

---

### Considerações Importantes

- **Separação de Lógica**: Cada `useEffect` deve lidar com um processo de sincronização independente. Por exemplo, ao conectar a um WebSocket e registrar um evento de analytics, é melhor usar dois efeitos distintos.

  ```js
  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);
  ```

- **Verificação de Dependências**: React verifica automaticamente as dependências que você passa ao `useEffect` para decidir quando o efeito deve ser executado novamente. Se uma dependência mudar, o efeito é executado novamente. Certifique-se de listar corretamente todas as dependências usadas no efeito.

---

### Conclusão

O `useEffect` é um dos hooks mais poderosos e versáteis no React, sendo capaz de lidar com a maioria dos efeitos colaterais necessários em aplicações modernas. Ao usá-lo corretamente, é possível gerenciar assinaturas, chamadas de API, manipulação de eventos e muito mais de forma eficiente e organizada.

---
