# Resumo do Hook `useReducer`

## Índice

1. [O que é `useReducer`](#o-que-é-usereducer)
2. [Quando usar `useReducer`](#quando-usar-usereducer)
3. [Como usar `useReducer`](#como-usar-usereducer)
   - [Estrutura básica](#estrutura-básica)
   - [Exemplo de implementação](#exemplo-de-implementação)
4. [Considerações finais](#considerações-finais)

---

## O que é `useReducer`

O **`useReducer`** é um hook do React que permite gerenciar o estado complexo em componentes funcionais. Ele é uma alternativa ao `useState` e é particularmente útil quando o estado depende de valores anteriores ou quando há múltiplas sub-valores a serem manipulados.

## Quando usar `useReducer`

Você deve considerar usar o `useReducer` nas seguintes situações:

- Quando o estado é um objeto complexo com múltiplos sub-valores.
- Quando as transições de estado são baseadas em ações complexas.
- Quando o estado precisa ser compartilhado entre componentes.

## Como usar `useReducer`

### Estrutura básica

O `useReducer` recebe dois argumentos:

1. **reducer**: uma função que recebe o estado atual e uma ação, e retorna o novo estado.
2. **estado inicial**: o estado inicial para o reducer.

A sintaxe básica é a seguinte:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Exemplo de implementação

Aqui está um exemplo simples de como usar o `useReducer`:

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

Nesse exemplo, um contador é implementado onde o estado `count` é manipulado através de ações de incremento e decremento.

## Considerações finais

O `useReducer` é uma ferramenta poderosa que oferece uma maneira clara e eficiente de gerenciar estados complexos em componentes React. Ele ajuda a manter o código organizado e facilita a manutenção e escalabilidade.

Para mais informações, consulte a [documentação oficial do React sobre useReducer](https://react.dev/reference/react/useReducer)【28†source】.
