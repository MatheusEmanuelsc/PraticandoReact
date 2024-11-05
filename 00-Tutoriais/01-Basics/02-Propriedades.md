## Propriedades em Componentes React

### Índice

- [1. Introdução a Propriedades em Componentes React](#1-introdução-a-propriedades-em-componentes-react)
- [2. Exemplo Básico de Componentes com Propriedades](#2-exemplo-básico-de-componentes-com-propriedades)
- [3. Desestruturação de Propriedades](#3-desestruturação-de-propriedades)
- [4. Valores Diferentes de String](#4-valores-diferentes-de-string)
- [5. Valores Padrão para Propriedades](#5-valores-padrão-para-propriedades)
- [6. Boas Práticas ao Usar Propriedades](#6-boas-práticas-ao-usar-propriedades)
- [7. Diferença Entre Named e Default Exports](#7-diferença-entre-named-e-default-exports)
- [8. Conclusão](#8-conclusão)

---

### 1. Introdução a Propriedades em Componentes React

No React, **propriedades** (ou **props**) são dados que você pode passar de um componente pai para um componente filho. Elas tornam os componentes dinâmicos e reutilizáveis, permitindo o desenvolvimento de aplicações mais organizadas e flexíveis.

---

### 2. Exemplo Básico de Componentes com Propriedades

Neste exemplo, criaremos dois componentes:

- `App` (componente principal)
- `Header` (componente reutilizável)

Vamos construir o componente `Header` para aceitar três propriedades: `titulo`, `paragrafo`, e `ano`.

#### Estrutura do Projeto

```plaintext
src/
  App.jsx
  Components/
    Header/
      Header.jsx
```

#### Passo 1: Criar o Componente `Header`

No arquivo `Header.jsx` dentro da pasta `Components/Header`, crie o componente `Header` que aceita propriedades:

```jsx
// src/Components/Header/Header.jsx
export function Header(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.paragrafo}</p>
      <p>Ano: {props.ano}</p>
    </div>
  );
}
```

#### Passo 2: Utilizar o Componente `Header` no `App`

No arquivo `App.jsx`, use o componente `Header` e passe valores diferentes para as propriedades `titulo`, `paragrafo` e `ano`:

```jsx
// src/App.jsx
import { Header } from "./Components/Header/Header";

export function App() {
  return (
    <div>
      <Header
        titulo="Página Inicial"
        paragrafo="Bem-vindo à aplicação React!"
        ano={2023}
      />
      <Header
        titulo="Sobre Nós"
        paragrafo="Conheça mais sobre nossa equipe."
        ano={2022}
      />
    </div>
  );
}
```

---

### 3. Desestruturação de Propriedades

Para simplificar o código, é comum desestruturar as propriedades diretamente na definição do componente.

#### Exemplo com Desestruturação

```jsx
// src/Components/Header/Header.jsx
export function Header({ titulo, paragrafo, ano }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{paragrafo}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}
```

#### Vantagens

A desestruturação deixa o código mais claro e fácil de ler, evitando o uso repetitivo de `props`.

---

### 4. Valores Diferentes de String

No React, você pode passar qualquer tipo de dado como propriedade, incluindo números, booleanos, e objetos.

#### Exemplo de Uso

```jsx
<Header titulo="Página Inicial" paragrafo="Conteúdo interessante" ano={2023} />
```

Neste exemplo, `ano` é um número (2023), demonstrando que propriedades podem receber valores que não são strings.

---

### 5. Valores Padrão para Propriedades

Para definir um valor padrão para uma propriedade caso ela não seja passada, podemos usar `defaultProps`.

#### Exemplo com `defaultProps`

```jsx
// src/Components/Header/Header.jsx
export function Header({ titulo, paragrafo, ano }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{paragrafo}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}

Header.defaultProps = {
  titulo: "Título Padrão",
  paragrafo: "Texto padrão para o parágrafo.",
  ano: 2023,
};
```

Se algum valor não for passado para `titulo`, `paragrafo` ou `ano`, o componente usará os valores padrão definidos em `defaultProps`.

---

### 6. Boas Práticas ao Usar Propriedades

1. **Primeira Letra Maiúscula em Componentes**: Nomeie componentes com letra maiúscula para que o React os diferencie de elementos HTML.

2. **Envólver Vários Elementos**: Retorne múltiplos elementos envoltos em um contêiner, como uma `div` ou fragmento `<> </>`.

3. **Propriedades Dinâmicas**: Use propriedades dinâmicas para reutilizar o mesmo componente com diferentes valores, mantendo o código mais limpo e modular.

---

### 7. Diferença Entre Named e Default Exports

- **Named Export**: Exporta o componente diretamente pelo nome, precisando de `{}` na importação.

  ```jsx
  export function Header() {
    /* código */
  }
  import { Header } from "./Components/Header/Header";
  ```

- **Default Export**: Exporta o componente como padrão, permitindo importá-lo diretamente sem `{}`.

  ```jsx
  export default function Header() {
    /* código */
  }
  import Header from "./Components/Header/Header";
  ```

---

### 8. Conclusão

Propriedades são essenciais para tornar componentes React reutilizáveis e dinâmicos. Elas permitem passar dados de um componente pai para um filho, tornando o código mais organizado. Com desestruturação, valores não string e valores padrão, podemos criar componentes flexíveis, facilitando o desenvolvimento de aplicações escaláveis.

---
