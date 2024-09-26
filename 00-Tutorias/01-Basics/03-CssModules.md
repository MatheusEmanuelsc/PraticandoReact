# CSS no React

Este resumo aborda as diferentes formas de aplicar CSS em componentes React, com explicações detalhadas e exemplos práticos.

## Índice

1. [Introdução](#introdução)
2. [Etapa 1: Aplicando CSS Globalmente](#etapa-1-aplicando-css-globalmente)
3. [Etapa 2: Aplicando CSS com Escopo (CSS Modules)](#etapa-2-aplicando-css-com-escopo-css-modules)
4. [Conclusão](#conclusão)

---

## Introdução

No React, existem várias maneiras de aplicar estilos CSS. Este guia foca em duas abordagens principais: importar arquivos CSS diretamente e usar **CSS Modules** para garantir que os estilos sejam aplicados apenas ao componente desejado. Ao longo do resumo, serão fornecidos exemplos comentados para facilitar a compreensão.

---

## Etapa 1: Aplicando CSS Globalmente

A maneira mais comum de aplicar CSS no React é criar um arquivo CSS separado e importá-lo diretamente no arquivo JavaScript onde o componente é utilizado. Vale destacar que o CSS é importado diretamente no arquivo JavaScript e **não** no HTML.

### Exemplo de código

Crie um arquivo CSS, como `styles.css`, com o seguinte conteúdo:

```css
.fundo {
  background-color: red;
}
```

Agora, importe o arquivo CSS no seu componente React. Não é necessário dar um nome à importação, apenas o caminho do arquivo:

```js
import { Header } from "./Components/Header";
import "./styles.css"; // Importação do arquivo CSS

export function App() {
  return (
    <div className="fundo">
      <Header
        titulo="Jão"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione excepturi perferendis quam. Iste, exercitationem?"
      />
    </div>
  );
}
```

### Explicação

- **Importação do CSS no React:** A importação do CSS é feita no próprio arquivo JS, sem a necessidade de usá-lo no HTML.
- **Uso de `className`:** No React, utilizamos `className` em vez de `class`, mas a lógica é a mesma. A classe CSS é aplicada ao elemento, estilizando-o conforme as regras definidas no arquivo CSS.

---

## Etapa 2: Aplicando CSS com Escopo (CSS Modules)

Outra forma eficiente de aplicar CSS no React é através dos **CSS Modules**. Essa abordagem garante que os estilos sejam aplicados **apenas ao componente específico**, evitando conflitos de estilo entre componentes diferentes.

No ambiente do Vite, por exemplo, o suporte para CSS Modules já vem configurado automaticamente. Para utilizar essa técnica, o arquivo CSS deve seguir uma convenção de nomenclatura: o nome do arquivo deve terminar com `.module.css`.

### Exemplo de código

Crie um arquivo CSS chamado `styles.module.css` com o seguinte conteúdo:

```css
.fundo {
  background-color: black;
  color: yellow;
}
```

Agora, importe o arquivo CSS Modules e aplique os estilos no seu componente:

```js
import styles from "./styles.module.css"; // Importando os estilos como um objeto

export function Header(props) {
  return (
    <div className={styles.fundo}>
      {" "}
      {/* Aplicando a classe usando CSS Modules */}
      <h1>{props.titulo}</h1>
      <p>{props.paragrafo}</p>
    </div>
  );
}
```

### Explicação

- **CSS Modules:** Ao usar CSS Modules, o arquivo CSS exporta suas classes como objetos. Dessa forma, ao invés de usar diretamente o nome da classe, utilizamos `styles.nomeDaClasse`.
- **Escopo Local:** As classes CSS aplicadas através de CSS Modules são isoladas, ou seja, os estilos só afetam o componente específico em que foram importados.

---

## Conclusão

Neste resumo, vimos duas formas principais de aplicar CSS em um projeto React:

1. **CSS Global:** Importar diretamente o arquivo CSS para estilizar componentes. Esse método pode ser útil para aplicar estilos globais ou em múltiplos componentes.
2. **CSS Modules:** Garantir que os estilos afetem apenas o componente desejado, evitando conflitos com outros componentes.

Ambas as abordagens têm seus usos e vantagens, e a escolha entre elas dependerá das necessidades do projeto.
