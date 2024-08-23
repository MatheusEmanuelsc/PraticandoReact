

# Configurando React com Webpack em um Projeto Node.js

Após configurar o Babel e o Webpack, o próximo passo é integrar o React ao projeto. Este guia explica como instalar as dependências necessárias, criar a estrutura de pastas e arquivos, e ajustar o `package.json` para suportar o desenvolvimento com React.

## 1. Instalar React e ReactDOM

Primeiro, instale o React e o ReactDOM como dependências de desenvolvimento:

```bash
npm install react react-dom -D
```

- `react`: Biblioteca principal para criar interfaces de usuário.
- `react-dom`: Pacote que fornece métodos específicos para o DOM para usar com o React.

## 2. Criar a Estrutura de Pastas e Arquivos

### 2.1. Criar a Pasta `public` e o Arquivo `index.html`

Na raiz do projeto, crie uma pasta chamada `public` e dentro dela, crie o arquivo `index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

- O `index.html` serve como o arquivo base onde o Webpack irá injetar o bundle JavaScript gerado.

### 2.2. Criar a Pasta `src` e os Arquivos React

Dentro da pasta `src`, crie dois arquivos: `app.jsx` e `index.js`.

#### `app.jsx`

Este arquivo contém o componente principal da aplicação:

```jsx
const App = () => {
    return <h1>Hello, Webpack and React!</h1>;
};

export default App;
```

- `App` é um componente funcional que retorna uma mensagem simples.

#### `index.js`

Este arquivo importa o React e o componente `App`, e então renderiza `App` dentro do elemento `root` definido no `index.html`:

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import App from './app';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```

- `createRoot` é utilizado para criar a raiz de renderização para o React 18 e versões posteriores.

## 3. Ajustar o `package.json`

Para facilitar o desenvolvimento e a construção do projeto, ajuste os scripts no `package.json`:

```json
"scripts": {
  "start": "webpack serve --open --hot --mode development",
  "build": "webpack --mode production"
}
```

- `"start"`: Inicia o servidor de desenvolvimento Webpack com Hot Module Replacement (HMR) habilitado e abre automaticamente o navegador.
- `"build"`: Gera o bundle otimizado para produção.

## Conclusão

Com esses passos, você configurou com sucesso um ambiente de desenvolvimento para React utilizando Webpack e Babel. Agora, você pode começar a desenvolver sua aplicação React aproveitando todas as vantagens de um processo de build moderno.

--- 

Este resumo inclui todos os passos necessários para configurar e iniciar um projeto React com Webpack. 