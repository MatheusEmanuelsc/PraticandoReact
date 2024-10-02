### Renderização Condicional no React

A renderização condicional em React permite que você controle quais componentes ou elementos são exibidos na interface, com base em uma condição lógica. Isso é extremamente útil para criar interfaces dinâmicas que respondem a mudanças no estado da aplicação ou a interações do usuário. Abaixo está um guia completo sobre como implementar a renderização condicional no React.

---

## Índice

1. [Operador Ternário (`? :`)](#1-operador-ternário--)
2. [Renderização Condicional com `if/else`](#2-renderização-condicional-com-ifelse)
3. [Renderização com o Operador `&&`](#3-renderização-com-o-operador-)
4. [Renderização com `switch/case`](#4-renderização-com-switchcase)
5. [Retornando `null` para Omitir Renderização](#5-retornando-null-para-omitir-renderização)
6. [Modificando a Condição de Renderização](#6-modificando-a-condição-de-renderização)
   - 6.1. [Uso de `useState`](#61-uso-de-usestate)
   - 6.2. [Usando Eventos para Modificar a Condição](#62-usando-eventos-para-modificar-a-condição)
   - 6.3. [Renderização com Props](#63-renderização-com-props)
7. [Resumo Final](#7-resumo-final)

---

## 1. Operador Ternário (`? :`)

O operador ternário é a forma mais comum e concisa de realizar a renderização condicional no React. Ele é utilizado diretamente no JSX, permitindo uma estrutura compacta para `if/else`.

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <h1>Por favor, faça login.</h1>
      )}
    </div>
  );
}
```

### Explicação:

- Se `isLoggedIn` for `true`, o componente renderiza "Bem-vindo de volta!".
- Caso contrário, renderiza "Por favor, faça login".

---

## 2. Renderização Condicional com `if/else`

O `if/else` pode ser utilizado quando há necessidade de lógica mais complexa antes de retornar o JSX. Embora o `if/else` não seja diretamente suportado dentro do JSX, você pode definir a lógica condicional antes do retorno.

```jsx
function App() {
  const isLoggedIn = true;
  let content;

  if (isLoggedIn) {
    content = <h1>Bem-vindo de volta!</h1>;
  } else {
    content = <h1>Por favor, faça login.</h1>;
  }

  return <div>{content}</div>;
}
```

### Explicação:

- A variável `content` armazena o componente a ser renderizado com base no valor de `isLoggedIn`.

---

## 3. Renderização com o Operador `&&`

O operador lógico `&&` é útil para renderizar algo apenas quando uma condição for verdadeira. Se a condição for `false`, nada será renderizado.

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Bem-vindo!</h1>
      {isLoggedIn && <p>Você está logado!</p>}
    </div>
  );
}
```

### Explicação:

- Se `isLoggedIn` for `true`, a mensagem "Você está logado!" será renderizada.
- Caso contrário, nada será exibido.

---

## 4. Renderização com `switch/case`

O `switch/case` é utilizado quando existem múltiplas condições para verificar. Ele ajuda a organizar o código em casos mais complexos.

```jsx
function App() {
  const userRole = "admin";

  function renderContent() {
    switch (userRole) {
      case "admin":
        return <h1>Admin Dashboard</h1>;
      case "user":
        return <h1>Bem-vindo, usuário!</h1>;
      default:
        return <h1>Por favor, faça login.</h1>;
    }
  }

  return <div>{renderContent()}</div>;
}
```

### Explicação:

- A função `renderContent` verifica o valor de `userRole` e retorna diferentes componentes com base no papel do usuário (admin, user ou visitante).

---

## 5. Retornando `null` para Omitir Renderização

Em algumas situações, pode ser desejável não renderizar nada. Para isso, pode-se retornar `null` dentro da condição.

```jsx
function App() {
  const showMessage = false;

  return (
    <div>
      <h1>Olá!</h1>
      {showMessage ? <p>Mensagem importante</p> : null}
    </div>
  );
}
```

### Explicação:

- Quando `showMessage` é `false`, o parágrafo não será renderizado, pois `null` é retornado.

---

## 6. Modificando a Condição de Renderização

A condição de renderização pode ser modificada dinamicamente através de eventos do usuário, como cliques de botão ou alterações de entradas de dados. Isso geralmente é feito usando o estado (state).

### 6.1. Uso de `useState`

O hook `useState` permite que você controle e modifique o estado de uma variável para alterar a renderização com base em uma condição.

```jsx
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn); // Inverte o valor de 'isLoggedIn'
  }

  return (
    <div>
      <h1>{isLoggedIn ? "Bem-vindo de volta!" : "Por favor, faça login."}</h1>
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}
```

### Explicação:

- **`useState(false)`** define inicialmente `isLoggedIn` como `false`.
- **`setIsLoggedIn(!isLoggedIn)`** inverte o valor de `isLoggedIn`, alternando entre `true` e `false` quando o botão é clicado.

### 6.2. Usando Eventos para Modificar a Condição

A renderização condicional também pode ser modificada por eventos como alterações em inputs.

```jsx
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <h1>{isChecked ? "Checkbox marcada!" : "Marque a checkbox."}</h1>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}
```

### Explicação:

- O estado `isChecked` é alterado com base no valor da checkbox, controlando a renderização da mensagem.

### 6.3. Renderização com Props

Se a condição de renderização for passada via **props**, o componente filho pode utilizá-la para alterar o que é exibido.

```jsx
function Message({ isLoggedIn }) {
  return (
    <div>
      <h1>{isLoggedIn ? "Bem-vindo de volta!" : "Por favor, faça login."}</h1>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <Message isLoggedIn={isLoggedIn} />
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}
```

### Explicação:

- O componente `Message` recebe a prop `isLoggedIn` e ajusta sua renderização com base no valor recebido.

---

## 7. Resumo Final

Existem várias maneiras de realizar a renderização condicional no React:

1. **Operador Ternário** (`? :`): Compacto, ideal para condições simples.
2. **`if/else`**: Utilizado quando há necessidade de lógica adicional antes do JSX.
3. **Operador `&&`**: Renderiza algo apenas quando a condição for `true`.
4. **`switch/case`**: Organiza bem a lógica quando há múltiplas condições.
5. **Retornar `null`**: Evita que um componente seja renderizado.
6. **Modificação de Condição**: Utilizando `useState` ou props, você pode alterar dinamicamente a renderização com base em eventos.

Essas técnicas são fundamentais para construir interfaces dinâmicas e interativas em React, permitindo que a aplicação responda de forma eficiente às mudanças no estado e às interações do usuário.
