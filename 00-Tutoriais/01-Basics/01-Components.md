## Components no React

### Índice

- [1. Introdução aos Components](#1-introdução-aos-components)
- [2. Criando um Component Simples](#2-criando-um-component-simples)
- [3. Estruturação do Código com Components](#3-estruturação-do-código-com-components)
- [4. Exportações: Default e Named Exports](#4-exportações-default-e-named-exports)
- [5. Boas Práticas na Criação de Components](#5-boas-práticas-na-criação-de-components)

---

### 1. Introdução aos Components

No React, os **components** são a base de qualquer aplicação. Eles permitem criar partes reutilizáveis de código que podem ser combinadas para formar interfaces mais complexas.

Um **component** no React é, essencialmente, uma função que retorna JSX, uma combinação de **JavaScript** e **XML**, usada para descrever como a interface deve ser renderizada.

---

### 2. Criando um Component Simples

Aqui está um exemplo de um **component** simples chamado `App`. Ele retorna um texto "Olá Mundo" que será renderizado na página:

```jsx
// App.jsx
function App() {
  return <h1>Olá Mundo</h1>;
}

export default App;
```

Neste exemplo:

- A função `App` retorna o JSX `<h1>Olá Mundo</h1>`.
- Estamos exportando o **component** utilizando `export default`, o que facilita sua importação em outros arquivos.

Para renderizar este component, importe-o no arquivo principal, normalmente `index.js` ou `main.js`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));
```

---

### 3. Estruturação do Código com Components

À medida que sua aplicação cresce, é importante **desacoplar** o código, dividindo-o em componentes menores e reutilizáveis. Vamos organizar o código em uma estrutura de pastas:

```bash
src/
├── components/
│   └── App.jsx
├── index.js
```

#### Exemplo de Component Desacoplado

Vamos criar um novo **component** para separar o título e deixá-lo reutilizável.

```jsx
// components/Title.jsx
function Title() {
  return <h1>Olá Mundo</h1>;
}

export default Title;
```

Agora, o **component** `App` utilizará o novo **component** `Title`:

```jsx
// components/App.jsx
import Title from "./Title.jsx";

function App() {
  return (
    <div>
      <Title />
    </div>
  );
}

export default App;
```

Aqui, estamos utilizando um **component** `Title` dentro de `App`, e ele está envolto em uma `<div>`. No React, **não podemos retornar múltiplos elementos sem que estejam envolvidos por um elemento pai**.

Outra opção ao invés de uma `<div>` é utilizar **fragmentos** (`<>` e `</>`), que não adicionam elementos extras ao DOM:

```jsx
// components/App.jsx
import Title from "./Title.jsx";

function App() {
  return (
    <>
      <Title />
    </>
  );
}

export default App;
```

---

### 4. Exportações: Default e Named Exports

Existem duas formas principais de exportar um **component** no React:

#### Default Export

É quando exportamos um único item por padrão. No exemplo abaixo, estamos exportando `App` como padrão:

```jsx
// components/App.jsx
function App() {
  return <h1>Olá Mundo</h1>;
}

export default App;
```

Ao utilizar **default export**, a importação é realizada assim:

```jsx
import App from "./App.jsx";
```

#### Named Export

Se desejar exportar múltiplos **components** do mesmo arquivo, use **named exports**. Veja o exemplo:

```jsx
// components/App.jsx
export function App() {
  return <h1>Olá Mundo</h1>;
}
```

Nesse caso, a importação seria:

```jsx
import { App } from "./App.jsx";
```

Diferentemente do **default export**, no **named export** precisamos usar as chaves `{}` ao importar.

---

### 5. Boas Práticas na Criação de Components

Ao criar **components** no React, siga estas boas práticas para manter o código limpo e organizado:

- **Nomeação de Components**: Sempre inicie o nome dos **components** com letra maiúscula. Por exemplo, `App`, `Title`, etc. Isso é necessário porque o React diferencia entre componentes e tags HTML nativas com base no nome.
- **Envolva Múltiplos Elementos**: Quando retornar mais de um elemento em um **component**, use um wrapper como `<div>` ou **fragmentos** (`<> </>`).

- **Organização do Código**: Mantenha seus **components** organizados em uma pasta dedicada, como `src/components`, para facilitar a manutenção e escalabilidade.

- **Evite Componentes Gigantes**: Componentes grandes podem se tornar difíceis de manter. Desacople a lógica e crie componentes menores e reutilizáveis.
