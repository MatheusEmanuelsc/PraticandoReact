Aqui está a tradução e adaptação para português da base de dados fornecida, seguindo o padrão estabelecido:

---

# Phosphor Icons - Guia de Uso com React

Phosphor é uma família flexível de ícones para interfaces, diagramas, apresentações, e muito mais. Explore todos os ícones disponíveis em [phosphoricons.com](https://phosphoricons.com).

## Instalação

Para instalar o pacote com ícones:

```bash
npm i @phosphor-icons/react
```

## Como Usar

Basta importar os ícones necessários e adicioná-los no método de renderização do seu componente. O Phosphor suporta tree-shaking, ou seja, apenas o código dos ícones utilizados será incluído no bundle final.

```tsx
import { Cavalo, Coracao, Cubo } from "@phosphor-icons/react";

const App = () => {
  return (
    <main>
      <Cavalo />
      <Coracao color="#AE2983" weight="fill" size={32} />
      <Cubo color="teal" weight="duotone" />
    </main>
  );
};
```

### Componentes Servidor React e SSR

Ao utilizar ícones do Phosphor em ambientes com Server-Side Rendering (SSR), ou em ambientes que não permitem o uso da API de Contexto do React (como componentes de servidor no Next.js), importe os ícones do submódulo `/dist/ssr`:

```tsx
import { Peixe } from "@phosphor-icons/react/dist/ssr";

const MeuComponenteServidor = () => {
  return <Peixe weight="duotone" />;
};
```

**Nota:** Esses ícones SSR não utilizam o React Context, portanto, não herdarão estilos de um `IconContext` ancestral.

## Propriedades (Props)

Os componentes de ícones aceitam todas as propriedades que você pode passar para um elemento SVG normal, como objetos de estilo inline, manipuladores de eventos `onClick`, e muito mais. Os principais meios de estilização dos ícones geralmente incluem as seguintes propriedades:

- **color?**: `string` – Cor do ícone (pode ser qualquer valor de cor CSS, como hex, rgb, rgba, hsl, hsla, ou o especial `currentColor`).
- **size?**: `number | string` – Altura e largura do ícone (pode ser um número ou uma string com unidades como px, %, em, rem, etc.).
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Peso/estilo do ícone (pode ser usado para alternar estados de ícones, como um componente de avaliação que use estrelas com `weight="regular"` para estrelas vazias e `weight="fill"` para estrelas preenchidas).
- **mirrored?**: `boolean` – Inverte o ícone horizontalmente (útil em idiomas RTL).
- **alt?**: `string` – Texto alternativo acessível para o ícone.

## Contexto

O Phosphor utiliza o React Context para facilitar a aplicação de um estilo padrão a todos os ícones. Crie um `IconContext.Provider` na raiz do aplicativo e passe um objeto de configuração com as propriedades que devem ser aplicadas por padrão a todos os ícones:

```tsx
import { IconContext, Cavalo, Coracao, Cubo } from "@phosphor-icons/react";

const App = () => {
  return (
    <IconContext.Provider
      value={{
        color: "limegreen",
        size: 32,
        weight: "bold",
        mirrored: false,
      }}
    >
      <div>
        <Cavalo /> {/* Sou verde-limão, 32px e negrito! */}
        <Coracao /> {/* Eu também! */}
        <Cubo /> {/* Eu também :) */}
      </div>
    </IconContext.Provider>
  );
};
```

Você pode criar vários contextos para estilizar ícones de forma diferente em diferentes regiões de um aplicativo; os ícones utilizarão o Contexto mais próximo acima deles.

## Composabilidade

Os componentes podem aceitar elementos SVG arbitrários como filhos, desde que sejam válidos como filhos de um elemento `<svg>`. Isso pode ser usado para modificar um ícone com camadas de fundo, formas, filtros, animações, etc. Os filhos serão colocados abaixo do conteúdo normal do ícone.

O exemplo abaixo faz com que o ícone de cubo rotacione e pulse:

```tsx
const CuboGiratorio = () => {
  return (
    <Cubo color="darkorchid" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      />
    </Cubo>
  );
};
```

### Importação Completa

Você também pode importar todos os ícones de uma vez para usar em seu projeto, mas dependendo do empacotador, isso pode impedir o tree-shaking e aumentar o tamanho do bundle.

```tsx
import * as Icon from "@phosphor-icons/react";

<Icon.Smiley />
<Icon.Pasta weight="thin" />
<Icon.BateriaMetade size="24px" />
```

## Criando Ícones Customizados

É possível estender o Phosphor com seus próprios ícones customizados, aproveitando as abstrações de estilo e contexto usadas na biblioteca. Para criar um ícone customizado:

1. Desenhe seus ícones em uma grade de 256x256 pixels e exporte-os como SVG.
2. Crie um novo componente React com `forwardRef`, importando o componente `IconBase`, bem como os tipos `Icon` e `IconWeight` da biblioteca.

Defina um `Map<IconWeight, ReactElement>` que mapeia cada peso do ícone para o conteúdo do SVG correspondente. Nomeie o componente e renderize um `<IconBase />`, passando todas as propriedades e o `ref`, além dos pesos definidos.

```tsx
import { forwardRef, ReactElement } from "react";
import { Icon, IconBase, IconWeight } from "@phosphor-icons/react";

const pesos = new Map<IconWeight, ReactElement>([
  ["thin", <path d="..." />],
  ["light", <path d="..." />],
  ["regular", <path d="..." />],
  ["bold", <path d="..." />],
  ["fill", <path d="..." />],
  [
    "duotone",
    <>
      <path d="..." opacity="0.2" />
      <path d="..." />
    </>,
  ],
]);

const IconeCustomizado: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={pesos} />
));

IconeCustomizado.displayName = "IconeCustomizado";

export default IconeCustomizado;
```

---

Essa é a tradução e adaptação completa da base de dados, conforme solicitado.
