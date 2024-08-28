# Resumo sobre Componentes no React

## Índice

1. [O que são Componentes no React?](#o-que-são-componentes-no-react)
2. [Criando um Componente Funcional Simples](#criando-um-componente-funcional-simples)
3. [Adicionando Lógica JavaScript ao Componente](#adicionando-lógica-javascript-ao-componente)
4. [Conclusão](#conclusão)

## O que são Componentes no React?

No React, um **componente** é uma função ou classe que retorna uma parte da interface do usuário (UI). Componentes são reutilizáveis e ajudam a dividir a aplicação em partes menores e mais gerenciáveis. Eles podem ser **funcionais** ou **baseados em classe**.

- **Componentes Funcionais**: Funções JavaScript que retornam elementos React. São mais simples e recomendados para a maioria dos casos.
- **Componentes Baseados em Classe**: Classes ES6 que estendem de `React.Component` e incluem métodos adicionais. São úteis quando se precisa de métodos de ciclo de vida, mas menos usados nas versões mais recentes do React.

## Criando um Componente Funcional Simples

Aqui está um exemplo de um componente funcional simples em React:

```jsx
import React from "react";

function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}

export default Saudacao;
```

### Explicação

- **`import React from 'react';`**: Importa o React, que é necessário para definir um componente.
- **`function Saudacao()`**: Define um componente funcional chamado `Saudacao`.
- **`return <h1>Olá, mundo!</h1>;`**: Retorna um elemento JSX que será exibido na tela.
- **`export default Saudacao;`**: Exporta o componente para que ele possa ser usado em outras partes da aplicação.

## Adicionando Lógica JavaScript ao Componente

Para adicionar lógica JavaScript a um componente, podemos usar funções, variáveis e estados. Vamos adicionar um botão que, ao ser clicado, atualiza uma mensagem:

```jsx
import React, { useState } from "react";

function SaudacaoComLogica() {
  const [mensagem, setMensagem] = useState("Olá, mundo!");

  const alterarMensagem = () => {
    setMensagem("Você clicou no botão!");
  };

  return (
    <div>
      <h1>{mensagem}</h1>
      <button onClick={alterarMensagem}>Clique Aqui</button>
    </div>
  );
}

export default SaudacaoComLogica;
```

### Explicação

- **`useState`**: Um hook do React que permite adicionar estado a um componente funcional.
  - `const [mensagem, setMensagem] = useState('Olá, mundo!');` define um estado inicial `'Olá, mundo!'` e uma função `setMensagem` para atualizá-lo.
- **`alterarMensagem`**: Função JavaScript que altera o estado da mensagem quando o botão é clicado.
- **`onClick={alterarMensagem}`**: Atribui a função `alterarMensagem` ao evento de clique do botão.

## Conclusão

Componentes no React são a base da construção de interfaces reutilizáveis. Eles podem ser enriquecidos com lógica JavaScript usando hooks como `useState` para gerenciar o estado e funções para manipular dados. Começar com componentes funcionais é uma ótima maneira de entender a estrutura básica do React e como ele gerencia a UI de maneira eficiente.
