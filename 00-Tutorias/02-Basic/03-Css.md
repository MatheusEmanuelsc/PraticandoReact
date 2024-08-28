# Resumo sobre Como Adicionar CSS aos Componentes no React

## Índice

1. [Formas de Adicionar CSS aos Componentes](#formas-de-adicionar-css-aos-componentes)
2. [CSS Global](#css-global)
3. [CSS Módulos](#css-módulos)
4. [Estilos Inline](#estilos-inline)
5. [Bibliotecas de Estilo](#bibliotecas-de-estilo)
6. [Conclusão](#conclusão)

## 1. Formas de Adicionar CSS aos Componentes

No React, existem várias formas de adicionar CSS para estilizar componentes. As abordagens mais comuns são:

1. **CSS Global**: Usando arquivos CSS tradicionais que afetam toda a aplicação.
2. **CSS Módulos**: Arquivos CSS que são aplicados apenas a componentes específicos.
3. **Estilos Inline**: Usando estilos diretamente no elemento JSX.
4. **Bibliotecas de Estilo**: Utilizando bibliotecas externas como `styled-components` ou `TailwindCSS`.

## 2. CSS Global

Uma maneira simples de adicionar CSS é criar um arquivo `.css` e importá-lo no componente ou na raiz da aplicação.

**Exemplo:**

1. Crie um arquivo chamado `App.css`:

```css
/* App.css */
.titulo {
  color: blue;
  font-size: 24px;
}
```

2. Importe o arquivo CSS no seu componente:

```jsx
import React from "react";
import "./App.css"; // Importa o CSS

function Saudacao() {
  return <h1 className="titulo">Olá, mundo!</h1>; // Usa a classe CSS
}

export default Saudacao;
```

### Explicação

- **`.titulo`**: Classe CSS definida no arquivo `App.css`.
- **`import './App.css';`**: Importa o arquivo CSS para aplicar as classes globais ao componente.

## 3. CSS Módulos

Os **CSS Módulos** permitem que o CSS seja aplicado apenas ao componente específico, evitando conflitos de estilo.

**Exemplo:**

1. Crie um arquivo chamado `Saudacao.module.css`:

```css
/* Saudacao.module.css */
.titulo {
  color: green;
  font-size: 24px;
}
```

2. Importe e use o CSS no componente:

```jsx
import React from "react";
import styles from "./Saudacao.module.css"; // Importa o módulo CSS

function Saudacao() {
  return <h1 className={styles.titulo}>Olá, mundo!</h1>; // Aplica a classe do módulo
}

export default Saudacao;
```

### Explicação

- **`Saudacao.module.css`**: Define estilos que só são aplicados ao componente `Saudacao`.
- **`import styles from './Saudacao.module.css';`**: Importa o módulo CSS como um objeto `styles`.
- **`className={styles.titulo}`**: Acessa a classe `titulo` do módulo CSS.

## 4. Estilos Inline

Outra maneira de adicionar CSS é usando estilos inline diretamente no elemento JSX.

**Exemplo:**

```jsx
import React from "react";

function Saudacao() {
  const estiloTitulo = {
    color: "red",
    fontSize: "24px",
  };

  return <h1 style={estiloTitulo}>Olá, mundo!</h1>;
}

export default Saudacao;
```

### Explicação

- **`const estiloTitulo`**: Objeto JavaScript que define os estilos CSS.
- **`style={estiloTitulo}`**: Aplica o estilo inline ao elemento `<h1>`.

## 5. Bibliotecas de Estilo

Bibliotecas como **`styled-components`** ou **`TailwindCSS`** oferecem soluções mais avançadas para estilizar componentes no React.

**Exemplo com `styled-components`:**

1. Instale o `styled-components`:

   ```bash
   npm install styled-components
   ```

2. Use no seu componente:

```jsx
import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  color: purple;
  font-size: 24px;
`;

function Saudacao() {
  return <Titulo>Olá, mundo!</Titulo>;
}

export default Saudacao;
```

### Explicação

- **`styled-components`**: Permite escrever CSS diretamente em arquivos JavaScript e criar componentes estilizados reutilizáveis.

## 6. Conclusão

Existem várias formas de adicionar CSS aos componentes React, desde estilos globais com arquivos CSS até estilos encapsulados usando módulos, inline ou bibliotecas como `styled-components`. Escolha a abordagem que melhor se adapta ao seu projeto e às suas necessidades.
