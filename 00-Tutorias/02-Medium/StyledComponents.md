# Styled Components em React

## Índice

- [Introdução](#introdução)
- [O que são Styled Components?](#o-que-são-styled-components)
- [Instalação](#instalação)
- [Criando seu primeiro Styled Component](#criando-seu-primeiro-styled-component)
- [Estilos dinâmicos com props](#estilos-dinâmicos-com-props)
- [Temas com ThemeProvider](#temas-com-themeprovider)
- [Aninhamento de estilos](#aninhamento-de-estilos)
- [Extendendo estilos](#extendendo-estilos)
- [Estilos globais](#estilos-globais)
- [Vantagens e Desvantagens](#vantagens-e-desvantagens)
- [Conclusão](#conclusão)

## Introdução

Styled Components é uma biblioteca que permite escrever CSS diretamente dentro dos componentes de React. Ela utiliza tagged template literals do ES6 para criar componentes com estilos encapsulados. Essa abordagem melhora a manutenção do código e facilita o desenvolvimento de interfaces mais complexas.

## O que são Styled Components?

Styled Components transformam estilos CSS em componentes React, permitindo encapsular e reaproveitar os estilos. Cada componente tem escopo isolado, ou seja, os estilos não vazam para outros componentes, evitando conflitos de CSS.

## Instalação

Para usar Styled Components em um projeto React, basta instalar a biblioteca com o npm ou yarn:

```bash
npm install styled-components
# ou
yarn add styled-components
```

## Criando seu primeiro Styled Component

Abaixo está um exemplo básico de como criar um botão com Styled Components:

```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return <Button>Click Me</Button>;
}

export default App;
```

### Explicação:

- `styled.button`: Cria um componente estilizado baseado na tag `<button>`.
- `&:hover`: Aplica estilo ao estado de hover.

## Estilos dinâmicos com props

Styled Components permitem criar estilos dinâmicos com base nas `props` que são passadas ao componente.

Exemplo:

```jsx
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </>
  );
}
```

Aqui, o botão recebe a `prop` `primary` que altera a cor de fundo com base no valor booleano da propriedade.

## Temas com ThemeProvider

Styled Components também suportam o uso de temas globais através do `ThemeProvider`, permitindo que estilos sejam centralizados e reutilizados de maneira consistente.

Exemplo:

```jsx
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "blue",
  secondaryColor: "gray",
};

const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button with Theme</Button>
    </ThemeProvider>
  );
}
```

## Aninhamento de estilos

Styled Components permite aninhar seletores como no SASS, facilitando a organização dos estilos:

```jsx
const Card = styled.div`
  padding: 20px;
  background-color: #f8f9fa;

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
`;
```

## Extendendo estilos

Você pode estender os estilos de um componente com `styled`:

```jsx
const PrimaryButton = styled(Button)`
  background-color: darkblue;
`;
```

Isso facilita a reutilização e a variação de estilos entre componentes semelhantes.

## Estilos globais

Styled Components também permite definir estilos globais com `createGlobalStyle`:

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>Button</Button>
    </>
  );
}
```

## Vantagens e Desvantagens

### Vantagens:

- Estilos escopados ao componente, evitando conflitos.
- Suporte a estilos dinâmicos.
- Suporte a temas globais.
- Facilidade de manutenção e reutilização.

### Desvantagens:

- Adiciona dependência ao projeto.
- Pode ser menos performático em projetos muito grandes devido à injeção de estilos.

## Conclusão

Styled Components oferece uma solução poderosa para estilizar componentes em React, melhorando a modularidade e a legibilidade do código. Com suporte a estilos dinâmicos, temas e componentes estendidos, é uma ótima escolha para projetos de diferentes escalas.
