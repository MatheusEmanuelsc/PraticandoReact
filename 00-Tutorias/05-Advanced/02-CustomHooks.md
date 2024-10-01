# Resumo sobre Custom Hooks com TypeScript

## O que são Custom Hooks?

Custom Hooks são uma maneira de extrair e reutilizar lógica de estado e efeitos colaterais em componentes funcionais no React. Eles permitem que você compartilhe funcionalidades entre componentes sem modificar a estrutura da árvore de componentes, facilitando a manutenção e a reutilização do código.

## Como funcionam?

Os Custom Hooks são funções que começam com a palavra "use" e podem chamar outros Hooks do React (como `useState`, `useEffect`, entre outros). Eles podem ser usados para encapsular lógica complexa, como manipulação de formulários, interações com APIs ou lógica de animação.

## Exemplo de Uso com TypeScript

### 1. Criar um Custom Hook

Um Custom Hook pode ser criado para gerenciar um contador.

```typescript
import { useState } from "react";

// Criando um Custom Hook para contador
const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
```

### 2. Usar o Custom Hook em um Componente

O Custom Hook pode ser facilmente utilizado em um componente funcional.

```typescript
import React from "react";

const CounterComponent: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
};
```

## Vantagens

- **Reutilização**: Permite reutilizar lógica entre diferentes componentes sem duplicação de código.
- **Organização**: Mantém os componentes limpos e organizados, separando a lógica em funções reutilizáveis.
- **Composição**: Facilita a combinação de diferentes Custom Hooks para criar funcionalidades complexas.

## Desvantagens

- **Abstração**: A complexidade pode aumentar se muitos Custom Hooks forem utilizados, dificultando a compreensão do fluxo do código.
- **Testabilidade**: Pode ser mais desafiador testar Custom Hooks, especialmente se dependem de outros Hooks ou efeitos colaterais.

## Conclusão

Custom Hooks são uma maneira eficaz de compartilhar lógica em aplicações React. Ao encapsular a lógica em funções reutilizáveis, eles ajudam a manter os componentes mais limpos e fáceis de entender. A utilização com TypeScript permite uma melhor tipagem e segurança do código, tornando a experiência de desenvolvimento mais robusta.

**Fonte**: [Documentação Oficial do React - Hooks](https://reactjs.org/docs/hooks-custom.html)
