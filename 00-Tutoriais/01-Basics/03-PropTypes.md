## Validando Propriedades com PropTypes no React

### Índice

- [1. Introdução ao PropTypes](#1-introdução-ao-proptypes)
- [2. Instalação do PropTypes](#2-instalação-do-proptypes)
  - [2.1. Utilizando Create React App](#21-utilizando-create-react-app)
  - [2.2. Utilizando Vite](#22-utilizando-vite)
- [3. Exemplo de Uso do PropTypes](#3-exemplo-de-uso-do-proptypes)
  - [3.1. Definindo Tipos de Propriedades](#31-definindo-tipos-de-propriedades)
  - [3.2. Propriedades Opcionais e Valores Padrão](#32-propriedades-opcionais-e-valores-padrão)
- [4. Conclusão](#4-conclusão)

---

### 1. Introdução ao PropTypes

PropTypes é uma biblioteca que permite especificar os tipos de dados esperados nas propriedades (props) dos componentes React. Essa prática ajuda a evitar erros, principalmente ao trabalhar com componentes reutilizáveis, garantindo que os tipos corretos sejam passados.

---

### 2. Instalação do PropTypes

#### 2.1. Utilizando Create React App

Caso esteja usando o Create React App, não é necessário instalar o PropTypes, pois ele já vem instalado por padrão. Basta importá-lo e definir os tipos para as propriedades no componente.

#### 2.2. Utilizando Vite

Se você estiver utilizando o Vite, será necessário instalar o PropTypes manualmente com o seguinte comando:

```bash
npm install prop-types
```

---

### 3. Exemplo de Uso do PropTypes

Neste exemplo, vamos criar um componente `App` que utiliza PropTypes para validar suas propriedades `title`, `desc` e `data`.

```jsx
// src/App.jsx
import PropTypes from "prop-types";

function App({ title, desc, data }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <small>{data}</small>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  data: PropTypes.number,
};

export default App;
```

#### 3.1. Definindo Tipos de Propriedades

No exemplo acima:

- `title` deve ser uma string obrigatória (`PropTypes.string.isRequired`).
- `desc` é uma string opcional (`PropTypes.string`).
- `data` é um número opcional (`PropTypes.number`).

#### 3.2. Propriedades Opcionais e Valores Padrão

Para propriedades opcionais, é possível definir valores padrão utilizando `defaultProps`. Isso garante que o componente tenha um valor, mesmo se a propriedade não for passada.

Exemplo:

```jsx
App.defaultProps = {
  desc: "Descrição padrão",
  data: 0,
};
```

Nesse caso:

- `desc` terá o valor `"Descrição padrão"` caso não seja passado.
- `data` terá o valor `0` caso não seja passado.

---

### 4. Conclusão

O PropTypes é uma ferramenta útil para garantir a consistência dos dados passados entre componentes no React. Ao especificar tipos de dados e valores padrão, você torna o código mais robusto e facilita a manutenção e reutilização dos componentes.
