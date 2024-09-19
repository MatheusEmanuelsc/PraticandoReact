## Propriedades em Componentes React

No React, **propriedades** (ou **props**) são dados que você pode passar de um componente pai para um componente filho. Essas propriedades permitem que os componentes sejam mais dinâmicos e reutilizáveis, tornando o desenvolvimento mais organizado.

### Exemplo Básico de Componentes com Propriedades

Neste exemplo, temos dois componentes:

- `App` (componente principal)
- `Header` (componente reutilizável)

Vamos criar o componente `Header` que recebe duas propriedades: `titulo` e `paragrafo`.

### Estrutura do Projeto

```
src/
  App.jsx
  Components/
    Header/
      Header.jsx
```

### Passo 1: Criar o Componente `Header`

No arquivo `Header.jsx` dentro da pasta `Components/Header`, vamos criar o componente `Header` que aceita propriedades:

```jsx
// src/Components/Header/Header.jsx
export function Header(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.paragrafo}</p>
    </div>
  );
}
```

#### Detalhes do Código:

- `props` é um objeto que contém todas as propriedades passadas para o componente.
- `props.titulo` e `props.paragrafo` são acessados para renderizar o título e o parágrafo no componente.

### Passo 2: Utilizando o Componente `Header` no `App`

No arquivo `App.jsx`, utilizamos o componente `Header` e passamos valores diferentes para as propriedades `titulo` e `paragrafo`:

```jsx
// src/App.jsx
import { Header } from "./Components/Header/Header";

export function App() {
  return (
    <div>
      <Header
        titulo="Jão"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione excepturi perferendis quam. Iste, exercitationem?"
      ></Header>
      <Header
        titulo="Bão"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione excepturi perferendis quam. Iste, exercitationem?"
      ></Header>
      <Header
        titulo="Gab"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione excepturi perferendis quam. Iste, exercitationem?"
      ></Header>
    </div>
  );
}
```

#### Detalhes do Código:

- O componente `Header` é reutilizado três vezes com diferentes valores para as propriedades `titulo` e `paragrafo`.
- Isso exemplifica como as **propriedades** permitem a reutilização de componentes com dados dinâmicos.

### Boas Práticas ao Usar Propriedades:

1. **Primeira Letra Maiúscula em Componentes**: Sempre nomeie seus componentes com a primeira letra maiúscula para que o React consiga diferenciá-los de elementos HTML.

   Exemplo:

   ```jsx
   export function Header() {
     /* código */
   }
   ```

2. **Envólver Vários Elementos**: Se você precisar retornar múltiplos elementos de um componente, eles devem ser envolvidos por um único contêiner como uma `div` ou um fragmento `<> </>`.

   Exemplo:

   ```jsx
   return (
     <>
       <h1>Título</h1>
       <p>Parágrafo</p>
     </>
   );
   ```

3. **Propriedades Dinâmicas**: Propriedades podem ser dinâmicas, permitindo que o mesmo componente seja usado com diferentes valores de dados, tornando o código mais reutilizável e limpo.

### Diferença Entre Named e Default Exports

- **Named Export**: Você exporta o componente diretamente pelo nome. Nesse caso, ao importar, você precisa usar `{}`.

  Exemplo de exportação:

  ```jsx
  export function Header() {
    /* código */
  }
  ```

  Exemplo de importação:

  ```jsx
  import { Header } from "./Components/Header/Header";
  ```

- **Default Export**: Você exporta o componente como padrão, permitindo importá-lo diretamente sem `{}`.

  Exemplo de exportação:

  ```jsx
  export default function Header() {
    /* código */
  }
  ```

  Exemplo de importação:

  ```jsx
  import Header from "./Components/Header/Header";
  ```

### Conclusão:

Propriedades são uma das formas mais poderosas de tornar os componentes React reutilizáveis e dinâmicos. Ao passar dados de um componente pai para um filho, você pode criar componentes genéricos e usá-los com diferentes valores de dados, mantendo o código mais organizado e modular.
