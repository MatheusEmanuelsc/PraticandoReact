# Transformando um Projeto React JavaScript em TypeScript

Este tutorial fornecerá um passo a passo completo para migrar um projeto React escrito em JavaScript para TypeScript. A migração para TypeScript traz benefícios como maior segurança de tipos, ferramentas de desenvolvimento melhoradas e a capacidade de detectar erros mais cedo no processo de desenvolvimento.

## Índice

1. [O que é TypeScript?](#o-que-e-typescript)
2. [Benefícios da migração para TypeScript](#beneficios-da-migracao)
3. [Configurando o ambiente](#configurando-o-ambiente)
4. [Renomeando arquivos `.js` para `.tsx`](#renomeando-arquivos)
5. [Atualizando pacotes do projeto](#atualizando-pacotes)
6. [Configurando o arquivo `tsconfig.json`](#configurando-tsconfig)
7. [Adicionando tipagens aos componentes](#adicionando-tipagens)
8. [Lidando com bibliotecas externas](#bibliotecas-externas)
9. [Conclusão](#conclusao)

## 1. O que é TypeScript? <a name="o-que-e-typescript"></a>

TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem. Ele permite definir tipos para variáveis, funções e componentes, ajudando a evitar erros comuns e melhorando a autocompleção e o suporte nas IDEs.

## 2. Benefícios da migração para TypeScript <a name="beneficios-da-migracao"></a>

Migrar um projeto React de JavaScript para TypeScript oferece uma série de vantagens:

- **Detecção antecipada de erros**: TypeScript pode identificar muitos erros em tempo de compilação, antes de executar o código.
- **Documentação implícita**: A tipagem torna o código mais legível e serve como uma documentação viva.
- **Autocompletar aprimorado**: IDEs como VSCode oferecem suporte superior para TypeScript, com sugestões mais precisas e detecção de erros em tempo real.
- **Maior segurança de tipos**: Tipos estáticos previnem uma ampla gama de bugs que podem ocorrer em projetos JavaScript.

## 3. Configurando o ambiente <a name="configurando-o-ambiente"></a>

1. **Instale as dependências do TypeScript**:

   No terminal, execute:

   ```bash
   npm install typescript @types/react @types/react-dom
   ```

2. **Instale o ESLint e Prettier com suporte a TypeScript** (opcional):

   ```bash
   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier --save-dev
   ```

3. **Configuração inicial de TypeScript**:

   Após instalar o TypeScript, crie um arquivo `tsconfig.json`:

   ```bash
   npx tsc --init
   ```

## 4. Renomeando arquivos `.js` para `.tsx` <a name="renomeando-arquivos"></a>

Os arquivos JavaScript que contêm JSX devem ser renomeados de `.js` para `.tsx`. Isso porque o `.tsx` é a extensão para arquivos que usam JSX com TypeScript.

1. Renomeie seus arquivos:

   - De: `App.js`
   - Para: `App.tsx`

2. Para arquivos que não contêm JSX, renomeie de `.js` para `.ts`.

> **Dica**: Realize esta renomeação gradualmente, validando a compilação em cada etapa.

## 5. Atualizando pacotes do projeto <a name="atualizando-pacotes"></a>

Muitos pacotes de JavaScript já possuem suas definições de tipos, mas você pode precisar instalar pacotes de tipagem separadamente para bibliotecas que não incluam tipos.

1. Verifique se os pacotes do seu projeto têm suporte para TypeScript.
2. Instale as definições de tipo (quando necessário) para bibliotecas de terceiros usando `@types/`:

   ```bash
   npm install @types/react-router-dom
   ```

   Isso instala as tipagens para bibliotecas que você usa, como `react-router-dom`.

## 6. Configurando o arquivo `tsconfig.json` <a name="configurando-tsconfig"></a>

O arquivo `tsconfig.json` controla como o compilador TypeScript funciona. Aqui está uma configuração inicial típica para um projeto React:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

Esta configuração ativa o modo estrito de TypeScript, garantindo verificações mais rigorosas, e configura o JSX para funcionar corretamente com React.

## 7. Adicionando tipagens aos componentes <a name="adicionando-tipagens"></a>

Agora, vamos começar a adicionar tipagens aos componentes.

### Exemplo de componente funcional com props tipadas:

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

Aqui, definimos um tipo `ButtonProps` que especifica que o `label` é uma string e `onClick` é uma função que não recebe parâmetros nem retorna valores.

### Tipagem de estados e hooks:

```tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

Neste exemplo, o estado `count` é explicitamente tipado como um `number`.

## 8. Lidando com bibliotecas externas <a name="bibliotecas-externas"></a>

Algumas bibliotecas podem não ter suporte nativo a TypeScript. Para essas, você pode:

1. Procurar pacotes de tipos na organização `@types/` (como `@types/lodash`).
2. Criar declarações de tipo manuais (`.d.ts`) para bibliotecas sem suporte.

   ```ts
   declare module "minha-biblioteca";
   ```

Essa declaração informa ao TypeScript que você sabe que está usando uma biblioteca não tipada, mas ela pode ser usada no projeto.

## 9. Conclusão <a name="conclusao"></a>

Migrar um projeto React para TypeScript pode parecer desafiador no início, mas com uma abordagem cuidadosa e incremental, os benefícios em termos de segurança e produtividade superam os desafios. A tipagem estática melhora a qualidade do código, ajuda a evitar bugs e torna a colaboração entre desenvolvedores mais fácil.
