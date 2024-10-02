# Guia Completo do React Router DOM

## Índice

- [Introdução](#introdução)
- [Instalação do React Router DOM](#instalação-do-react-router-dom)
- [Explicação de cada componente do React Router DOM](#explicação-de-cada-componente-do-react-router-dom)
  - [BrowserRouter](#browserrouter)
  - [Routes](#routes)
  - [Route](#route)
  - [Link](#link)
- [Exemplo prático com navegação](#exemplo-prático-com-navegação)
- [Conclusão](#conclusão)

## Introdução

O **React Router DOM** é a biblioteca padrão para gerenciar a navegação entre diferentes "páginas" ou componentes em uma aplicação React. Ele permite que você implemente navegação SPA (Single Page Application), onde a página não é recarregada, e a URL muda conforme o usuário navega pela aplicação.

Neste guia, vamos cobrir desde a instalação até a configuração de rotas e a navegação entre elas, com explicações detalhadas de cada componente usado para essa finalidade.

## Instalação do React Router DOM

Para instalar o React Router DOM em seu projeto React, execute o seguinte comando:

```bash
npm install react-router-dom
```

Esse comando instalará a biblioteca no seu projeto, permitindo que você a utilize para gerenciar as rotas da sua aplicação.

## Explicação de cada componente do React Router DOM

Agora vamos entender os componentes principais do React Router DOM:

### BrowserRouter

O **`BrowserRouter`** é o componente que encapsula toda a aplicação que utiliza o React Router. Ele é responsável por manter o histórico de navegação do usuário, permitindo que a URL seja atualizada conforme a navegação acontece.

- **Função principal**: Gerenciar o histórico do navegador e sincronizar a URL com os componentes que estão sendo exibidos.
- **Uso**: Todo o código relacionado a rotas deve ser encapsulado dentro do `BrowserRouter`.

Exemplo:

```jsx
<BrowserRouter>{/* Suas rotas e navegação vão aqui */}</BrowserRouter>
```

### Routes

O componente **`Routes`** substituiu o antigo **`Switch`** no React Router DOM v6. Ele é responsável por renderizar apenas a primeira rota que corresponda à URL atual.

- **Função principal**: Envolver todas as suas rotas e garantir que a rota correta seja exibida com base na URL.
- **Diferente do `Switch`**: No v6, não é mais necessário usar `exact` para rotas exatas, pois o comportamento padrão do `Routes` já faz correspondências exatas.

Exemplo:

```jsx
<Routes>{/* Definição de rotas vai aqui */}</Routes>
```

### Route

O **`Route`** é o componente que define uma rota específica. Ele especifica o caminho da URL e qual componente deve ser renderizado quando esse caminho for acessado.

- **Função principal**: Mapeia uma URL específica para um componente React.
- **Atributos importantes**:
  - `path`: Define o caminho da URL que essa rota deve corresponder.
  - `element`: Especifica qual componente deve ser renderizado quando a URL corresponde ao `path`.

Exemplo:

```jsx
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
```

### Link

O **`Link`** é usado para criar links de navegação interna, em vez de utilizar o elemento `<a>` tradicional. Ele previne o recarregamento completo da página e atualiza a URL de forma dinâmica.

- **Função principal**: Facilitar a navegação entre páginas sem recarregar a aplicação inteira.
- **Atributo importante**:
  - `to`: Define para qual rota o link deve levar.

Exemplo:

```jsx
<Link to="/login">
  <button>Fazer Login</button>
</Link>
```

---

## Exemplo prático com navegação

Agora, vamos juntar tudo o que foi explicado e criar um exemplo prático. Nesse exemplo, temos duas páginas: **Home** e **Login**. O botão na página Home leva o usuário para a página de Login, e o botão na página Login leva o usuário de volta para a página Home.

### Estrutura de Arquivos:

```
/src
  /Pages
    Home.js
    Login.js
  App.js
```

### Código completo:

#### `Home.js`

```jsx
import { Link } from "react-router-dom"; // Importação do Link para navegação interna

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* O Link evita o recarregamento da página ao navegar */}
      <Link to="/login">
        <button>Fazer Login</button>
      </Link>
    </div>
  );
}
```

#### `Login.js`

```jsx
import { Link } from "react-router-dom"; // Importação do Link para navegação interna

export function Login() {
  return (
    <div>
      <h2>Login</h2>
      {/* O Link leva de volta para a página Home */}
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
```

#### `App.js`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importação dos componentes de rotas
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  return (
    <Router>
      {/* O Routes define as rotas da aplicação */}
      <Routes>
        {/* Cada Route mapeia uma URL para um componente */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Explicação detalhada do fluxo:

1. **Encapsulamento com `BrowserRouter`**: O componente `Router` é responsável por controlar o histórico de navegação. Ele envolve todas as rotas da aplicação para que o React Router possa gerenciar a mudança de URL sem recarregar a página.
2. **Definição de rotas com `Routes` e `Route`**: Dentro de `Routes`, definimos cada rota usando `Route`. Cada `Route` especifica um `path`, que é a URL que o usuário vai acessar, e um `element`, que é o componente que será renderizado quando essa URL for acessada.

3. **Navegação com `Link`**: Nos componentes `Home` e `Login`, usamos o `Link` para permitir a navegação entre páginas sem recarregar a página inteira. O atributo `to` do `Link` especifica a rota para a qual o usuário será levado.

### Comportamento esperado:

- Quando o usuário visita a URL `/`, a página **Home** será exibida.
- Quando o botão **Fazer Login** na página Home for clicado, o usuário será levado para a página **Login**.
- Na página **Login**, ao clicar no botão **Home**, o usuário será levado de volta para a página inicial.

## Conclusão

O **React Router DOM** é uma ferramenta poderosa e flexível para gerenciar a navegação em aplicações React. Ele permite que você defina rotas de maneira simples e eficiente, e facilita a criação de uma experiência de navegação rápida e sem recarregamentos completos de página.

No exemplo prático, mostramos como criar uma aplicação básica com navegação entre duas páginas, utilizando os principais componentes do React Router DOM: **`BrowserRouter`**, **`Routes`**, **`Route`**, e **`Link`**. Ao seguir esse guia, você será capaz de implementar navegação em suas próprias aplicações React de forma organizada e eficiente.
