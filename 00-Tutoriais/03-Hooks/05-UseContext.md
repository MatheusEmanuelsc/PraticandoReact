# Resumo Completo sobre `useContext` no React

## Índice

1. [Introdução](#introdução)
2. [Sintaxe do `useContext`](#sintaxe-do-usecontext)
3. [Quando Usar `useContext`](#quando-usar-usecontext)
4. [Exemplo Prático](#exemplo-prático)
5. [Considerações Finais](#considerações-finais)

---

## Introdução

O `useContext` é um **hook** do React que permite que você consuma o contexto diretamente em um componente funcional. Isso facilita o compartilhamento de dados entre componentes sem precisar passar propriedades manualmente em cada nível da árvore de componentes. O `useContext` simplifica a utilização do contexto, tornando o código mais limpo e fácil de entender.

## Sintaxe do `useContext`

A sintaxe básica do `useContext` é a seguinte:

```jsx
const value = useContext(MyContext);
```

Aqui, `MyContext` é o contexto que você criou utilizando `React.createContext()`, e `value` será o valor atual do contexto.

## Quando Usar `useContext`

O `useContext` é recomendado em situações onde:

- Você precisa compartilhar dados entre muitos componentes sem passar propriedades em todos os níveis.
- Os dados são frequentemente acessados e alterados, como informações do usuário, preferências de tema ou configurações de idioma.
- Você quer evitar a "prop drilling", onde as propriedades são passadas por muitos componentes intermediários.

### Dicas:

- Utilize o `useContext` em conjunto com `React.createContext()` para definir o contexto e seus valores.
- Combine `useContext` com `useReducer` para gerenciar o estado global de forma eficaz.

## Exemplo Prático

Aqui está um exemplo simples de uso do `useContext`:

```jsx
import React, { createContext, useContext, useState } from "react";

// Criando o contexto
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
```

Neste exemplo, criamos um contexto de tema que permite que o componente `ThemedComponent` acesse e altere o tema atual sem passar essas propriedades diretamente.

## Considerações Finais

O `useContext` é uma ferramenta poderosa para gerenciar o estado global em aplicações React, mas deve ser utilizado com cautela para evitar complexidade desnecessária. Para mais detalhes sobre o `useContext`, consulte a [documentação oficial do React](https://react.dev/reference/react/useContext)【28†source】.
