### Índice

1. [Introdução](#introdução)
2. [O que são Components no React](#o-que-são-components-no-react)
3. [Tipos de Components](#tipos-de-components)
   - 3.1 [Functional Components](#functional-components)
   - 3.2 [Class Components](#class-components)
4. [Component Composition](#component-composition)
5. [Ciclo de Vida dos Components](#ciclo-de-vida-dos-components)
   - 5.1 [Ciclo de Vida em Class Components](#ciclo-de-vida-em-class-components)
   - 5.2 [Hooks em Functional Components](#hooks-em-functional-components)
6. [Props e State](#props-e-state)
   - 6.1 [Props](#props)
   - 6.2 [State](#state)

---

### Introdução

Components são a base da construção de interfaces em React. Eles permitem que você divida a interface em partes reutilizáveis e independentes, facilitando a organização e manutenção do código.

### O que são Components no React

Um component em React é uma função ou classe que aceita entradas, chamadas de **props** (abreviação de properties), e retorna elementos React que descrevem o que deve aparecer na tela. Components podem ser aninhados, reutilizados e compostos para criar interfaces complexas a partir de pequenos blocos isolados de código.

### Tipos de Components

React oferece dois tipos principais de components:

#### 3.1 Functional Components

**Functional Components** são componentes baseados em funções JavaScript. Eles são mais simples e diretos, adequados para a maioria dos casos de uso. Um Functional Component é basicamente uma função que retorna um elemento React:

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Aqui, `Greeting` é um Functional Component que recebe `props` e retorna um elemento `<h1>` com a saudação.

##### Vantagens dos Functional Components:
- Mais simples e fácil de entender.
- Melhor performance, já que não geram instâncias como os Class Components.
- Suporte total aos **React Hooks**, permitindo o uso de state e outros recursos avançados sem precisar de classes.

#### 3.2 Class Components

**Class Components** são baseados em classes ES6. Eles oferecem mais funcionalidades que os Functional Components, como métodos de ciclo de vida, mas são mais verbosos:

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

Aqui, `Greeting` é um Class Component que estende `React.Component` e implementa o método `render` para retornar o conteúdo.

##### Vantagens dos Class Components:
- Possuem acesso aos métodos de ciclo de vida.
- Podem ser úteis quando é necessário controlar o estado interno e reagir às mudanças de estado de forma mais detalhada.

### Component Composition

**Component Composition** é o processo de combinar vários components para criar uma interface de usuário. Um component pode utilizar outros components como seus elementos filhos:

```javascript
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
```

Aqui, `App` é um component que compõe três instâncias do component `Welcome`. Esse padrão é essencial para criar aplicações escaláveis e modulares.

### Ciclo de Vida dos Components

O ciclo de vida dos components em React descreve as fases que um component passa desde sua criação até sua remoção da árvore de componentes. Cada fase permite que você interaja com o component de maneiras específicas.

#### 5.1 Ciclo de Vida em Class Components

Class Components possuem métodos específicos que são chamados em diferentes fases do ciclo de vida:

- **Montagem (Mounting):** Quando o component é inserido na árvore DOM.
  - `constructor()`: Chamado ao criar o component.
  - `componentDidMount()`: Executado após o component ser inserido no DOM.

- **Atualização (Updating):** Quando o component recebe novos props ou state.
  - `componentDidUpdate(prevProps, prevState)`: Chamado após o component ser atualizado.

- **Desmontagem (Unmounting):** Quando o component é removido da árvore DOM.
  - `componentWillUnmount()`: Executado imediatamente antes de o component ser destruído.

Exemplo de um Class Component utilizando métodos de ciclo de vida:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}
```

#### 5.2 Hooks em Functional Components

Functional Components utilizam **Hooks** para gerenciar o ciclo de vida e o state. Os Hooks mais comuns são:

- **`useState`:** Permite adicionar state ao Functional Component.
- **`useEffect`:** Substitui os métodos `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.

Exemplo de uso de Hooks para substituir o ciclo de vida de um Class Component:

```javascript
import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return <h2>It is {date.toLocaleTimeString()}.</h2>;
}
```

### Props e State

Components em React podem gerenciar dados internos e receber dados externos através de **props** e **state**.

#### 6.1 Props

**Props** (propriedades) são dados passados de um component pai para um component filho. Eles são imutáveis dentro do component filho.

Exemplo:

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

#### 6.2 State

**State** é um objeto gerenciado internamente por um component que pode mudar ao longo do tempo. O state é mutável e pode ser atualizado usando o método `setState` em Class Components ou o Hook `useState` em Functional Components.

Exemplo de uso de state:

**Class Component:**

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

**Functional Component:**

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Conclusão

Components são a espinha dorsal do desenvolvimento em React, permitindo a criação de interfaces de usuário modulares, reutilizáveis e organizadas. Compreender a diferença entre Functional e Class Components, o ciclo de vida dos components, a composição de components e o uso de props e state é essencial para desenvolver aplicações robustas e manuteníveis em React.