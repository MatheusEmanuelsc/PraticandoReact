# Resumo sobre Componentes no React

## Índice

1. [O que são Componentes no React?](#o-que-são-componentes-no-react)
2. [Criando um Componente Funcional Simples](#criando-um-componente-funcional-simples)
3. [Adicionando Lógica JavaScript ao Componente](#adicionando-lógica-javascript-ao-componente)
4. [Adicionando Propriedades (Props) ao Componente](#adicionando-propriedades-props-ao-componente)
5. [Conclusão](#conclusão)

## O que são Componentes no React?

No React, um **componente** é a menor unidade reutilizável de código que representa uma parte da interface do usuário (UI). Componentes permitem dividir a aplicação em partes menores e mais gerenciáveis. Eles podem ser **funcionais** (baseados em funções) ou **baseados em classes** (baseados em classes ES6).

- **Componentes Funcionais**: Funções JavaScript que retornam elementos React escritos em JSX. São simples e frequentemente usados em aplicações modernas.
- **Componentes Baseados em Classe**: Classes ES6 que estendem de `React.Component` e oferecem funcionalidades adicionais, como métodos de ciclo de vida. No entanto, a partir das versões mais recentes do React, componentes funcionais com hooks são preferidos.

## Criando um Componente Funcional Simples

Vamos começar criando um componente funcional básico que exibe um texto simples:

### Exemplo: Componente Funcional Básico

```jsx
import React from "react";

// Definindo um componente funcional chamado Saudacao
function Saudacao() {
  return <h1>Olá, mundo!</h1>; // Retorna um elemento JSX
}

// Exportando o componente para uso em outros arquivos
export default Saudacao;
```

### Explicação

1. **Importação do React**: Importamos o React para que o código JSX (sintaxe semelhante ao HTML) possa ser usado.
2. **Definição do Componente**: Usamos `function Saudacao()` para criar um componente que retorna um elemento JSX `<h1>Olá, mundo!</h1>`.
3. **Exportação do Componente**: `export default Saudacao;` permite que o componente seja importado e usado em outros arquivos.

## Adicionando Lógica JavaScript ao Componente

Para tornar o componente mais dinâmico, podemos adicionar lógica JavaScript, como gerenciar o estado ou manipular eventos.

### Exemplo: Componente com Estado e Evento

Vamos adicionar um botão que, quando clicado, altera a mensagem exibida.

```jsx
import React, { useState } from "react"; // Importa o hook useState

function SaudacaoComLogica() {
  // Definindo um estado para a mensagem
  const [mensagem, setMensagem] = useState("Olá, mundo!");

  // Função para alterar a mensagem
  const alterarMensagem = () => {
    setMensagem("Você clicou no botão!");
  };

  return (
    <div>
      <h1>{mensagem}</h1> {/* Exibe a mensagem atual */}
      <button onClick={alterarMensagem}>Clique Aqui</button> {/* Botão para alterar a mensagem */}
    </div>
  );
}

export default SaudacaoComLogica;
```

### Explicação

1. **Uso do Hook `useState`**:
   - `const [mensagem, setMensagem] = useState('Olá, mundo!');` inicializa um estado chamado `mensagem` com o valor `'Olá, mundo!'` e uma função `setMensagem` para atualizá-lo.
2. **Função `alterarMensagem`**:
   - `const alterarMensagem = () => { ... }` é chamada ao clicar no botão, usando `onClick={alterarMensagem}`.
   - Essa função altera o estado usando `setMensagem`, atualizando a mensagem exibida.

## Adicionando Propriedades (Props) ao Componente

**Props** são dados passados de um componente pai para um componente filho. Elas permitem que o componente receba valores dinâmicos.

### Exemplo: Componente com Props

Vamos modificar o componente para receber uma prop `nome` que será exibida na saudação.

```jsx
import React from "react";

function SaudacaoComProps(props) {
  return <h1>Olá, {props.nome}!</h1>; // Usa props.nome para exibir o nome
}

export default SaudacaoComProps;
```

### Usando o Componente com Props

```jsx
import React from "react";
import SaudacaoComProps from "./SaudacaoComProps";

function App() {
  return (
    <div>
      <SaudacaoComProps nome="João" />{" "}
      {/* Passa a prop 'nome' com o valor 'João' */}
      <SaudacaoComProps nome="Maria" /> {/* Passa a prop 'nome' com o valor 'Maria' */}
    </div>
  );
}

export default App;
```

### Explicação

- **Props (Propriedades)**:
  - `props` é um objeto que contém todos os atributos passados para o componente.
  - No exemplo, `nome` é uma prop passada para `SaudacaoComProps` e usada para personalizar a saudação.

## Conclusão

Componentes no React são a base para a construção de interfaces reutilizáveis e modulares. Começamos com um componente funcional simples, adicionamos lógica JavaScript com hooks e, em seguida, introduzimos propriedades (props) para tornar os componentes mais dinâmicos e reutilizáveis. Este é o ponto de partida para criar aplicações React mais complexas e interativas.
