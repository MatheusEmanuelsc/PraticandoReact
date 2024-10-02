# Resumo Completo sobre `useState` no React

O hook `useState` permite adicionar variáveis de estado a componentes funcionais do React, oferecendo uma maneira simples de armazenar e manipular dados mutáveis no ciclo de vida de um componente. Neste resumo, cobrimos desde a introdução ao uso básico até exemplos de manipulação de objetos, arrays e práticas recomendadas.

## Índice

- [Introdução ao useState](#introdução-ao-usestate)
- [Uso Básico do useState](#uso-básico-do-usestate)
- [Atualizando o Estado](#atualizando-o-estado)
- [Atualizando com Base no Estado Anterior](#atualizando-com-base-no-estado-anterior)
- [Atualizando Objetos e Arrays no Estado](#atualizando-objetos-e-arrays-no-estado)
- [Evitando Recriação do Estado Inicial](#evitando-recriação-do-estado-inicial)
- [Tratamento de Erros Comuns](#tratamento-de-erros-comuns)

## Introdução ao useState

O `useState` é um hook do React que permite adicionar um estado a componentes funcionais. Cada estado possui uma variável associada e uma função para atualizá-la. O hook é importado do React e segue o seguinte formato:

```javascript
const [estado, setEstado] = useState(estadoInicial);
```

- **`estado`**: A variável que contém o valor atual do estado.
- **`setEstado`**: A função que atualiza o valor do estado.
- **`estadoInicial`**: O valor inicial do estado, que pode ser qualquer tipo de dado.

### Exemplo Simples

```javascript
import { useState } from "react";

function ExemploComponente() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Você clicou {contador} vezes
    </button>
  );
}
```

## Uso Básico do useState

No React, o `useState` é sempre chamado no nível superior do componente para garantir que o hook seja executado de forma consistente entre os renders. Além disso, a convenção é utilizar array destructuring para nomear a variável de estado e a função `set`.

```javascript
import { useState } from "react";

function MeuComponente() {
  const [idade, setIdade] = useState(30);
  const [nome, setNome] = useState("João");

  return (
    <div>
      <p>
        {nome} tem {idade} anos.
      </p>
      <button onClick={() => setIdade(idade + 1)}>Aumentar idade</button>
    </div>
  );
}
```

## Atualizando o Estado

A função `setEstado` pode ser usada de duas formas:

1. Passando diretamente o próximo estado:

```javascript
setNome("Maria");
```

2. Passando uma função que calcula o próximo estado com base no estado anterior:

```javascript
setIdade((idadeAnterior) => idadeAnterior + 1);
```

## Atualizando com Base no Estado Anterior

Para evitar problemas ao atualizar o estado várias vezes em um mesmo evento, é recomendável utilizar a função de atualização em vez de passar diretamente o valor:

### Exemplo de Problema

```javascript
function handleClick() {
  setIdade(idade + 1); // setIdade(42 + 1)
  setIdade(idade + 1); // setIdade(42 + 1)
  setIdade(idade + 1); // setIdade(42 + 1)
}
```

Aqui, o estado será atualizado apenas uma vez porque todas as chamadas usam o valor atual do estado. Para corrigir isso:

### Solução com Atualização Baseada no Estado Anterior

```javascript
function handleClick() {
  setIdade((prevIdade) => prevIdade + 1);
  setIdade((prevIdade) => prevIdade + 1);
  setIdade((prevIdade) => prevIdade + 1);
}
```

## Atualizando Objetos e Arrays no Estado

O estado em React é imutável, o que significa que você não deve alterar diretamente objetos ou arrays. Em vez disso, você deve criar uma nova instância do objeto ou array e atualizar o estado com essa nova instância.

### Exemplo com Objetos

```javascript
const [formulario, setFormulario] = useState({
  nome: "Ana",
  sobrenome: "Silva",
  email: "ana.silva@gmail.com",
});

function atualizarNome(evento) {
  setFormulario({
    ...formulario,
    nome: evento.target.value,
  });
}
```

### Exemplo com Arrays

```javascript
const [itens, setItens] = useState(["item1", "item2"]);

function adicionarItem(novoItem) {
  setItens([...itens, novoItem]);
}
```

## Evitando Recriação do Estado Inicial

Se o estado inicial for computacionalmente caro para criar, você pode passar uma função para o `useState`. Essa função será chamada apenas uma vez durante a renderização inicial:

```javascript
function MeuComponente() {
  const [todos, setTodos] = useState(() => criarTodosIniciais());

  return <ListaTodos todos={todos} />;
}
```

Neste exemplo, `criarTodosIniciais()` será chamado apenas na primeira renderização, evitando que seja executado desnecessariamente em renders subsequentes.

## Tratamento de Erros Comuns

### 1. Estado Antigo ao Logar Após Atualização

Ao chamar `setEstado`, o novo valor do estado só estará disponível no próximo render. Se você tentar logar o valor do estado imediatamente após chamá-lo, verá o valor antigo:

```javascript
function handleClick() {
  setNome("Lucas");
  console.log(nome); // Ainda será o valor anterior!
}
```

### 2. O Estado Não Atualiza na Tela

Isso pode ocorrer se você modificar o estado de forma imutável, como no exemplo a seguir, que tenta modificar diretamente o estado:

```javascript
// ERRADO: Mutação direta
formulario.nome = "Lucas";
```

### 3. "Too Many Re-renders" Error

Esse erro acontece quando `setEstado` é chamado dentro do próprio corpo do componente sem proteção, criando um loop de renderizações infinitas.

```javascript
function MeuComponente() {
  const [idade, setIdade] = useState(0);

  // ERRADO: Isso causará renderizações infinitas
  setIdade(idade + 1);

  return <p>{idade}</p>;
}
```

## Conclusão

O hook `useState` é uma ferramenta poderosa para gerenciar o estado de componentes funcionais no React. Compreender como usar corretamente o `useState`, lidar com atualizações de estado baseadas no estado anterior e trabalhar com objetos e arrays imutáveis é essencial para construir aplicações React eficazes e sem bugs.

---

Esse resumo cobriu os principais aspectos do `useState`, com exemplos e dicas práticas para evitar erros comuns.
