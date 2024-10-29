### Operador Ternário em JavaScript

O operador ternário é uma maneira de fazer uma verificação condicional simplificada, funcionando como uma versão compacta do `if...else`. Ele usa a seguinte estrutura:

```javascript
condição ? valorSeVerdadeiro : valorSeFalso;
```

- Se a condição for verdadeira, o valor `valorSeVerdadeiro` é retornado.
- Se a condição for falsa, o valor `valorSeFalso` é retornado.

#### Exemplo Básico

```javascript
const idade = 18;
const mensagem =
  idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";

console.log(mensagem); // Saída: 'Você é maior de idade'
```

### Aninhamento de Operadores Ternários

É possível aninhar operadores ternários para lidar com múltiplas condições, mas isso deve ser feito com cautela para não comprometer a legibilidade do código.

```javascript
const nota = 85;
const resultado = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "D";

console.log(resultado); // Saída: 'B'
```

### Utilizando o Operador Ternário em Funções

O operador ternário também pode ser usado para retornar valores diferentes em uma função com base em uma condição.

```javascript
function obterDesconto(preco) {
  return preco > 100 ? preco * 0.1 : preco * 0.05;
}

console.log(obterDesconto(120)); // Saída: 12
console.log(obterDesconto(80)); // Saída: 4
```

### Forma Reduzida com `&&`

Em JavaScript, você pode usar uma forma reduzida para condições simples quando não é necessário um valor para a condição falsa. Nesse caso, o operador lógico `&&` verifica se a condição é verdadeira e, se for, executa o valor seguinte.

```javascript
condição && valorSeVerdadeiro;
```

A `condição` precisa ser verdadeira para que o `valorSeVerdadeiro` seja executado ou retornado. Se a `condição` for falsa, a expressão toda retorna `undefined` ou `false`.

#### Exemplo da Forma Reduzida

**1. Executando uma Função Condicionalmente**

```javascript
const isLogado = true;
isLogado && console.log("Usuário está logado");
// Saída: 'Usuário está logado' (somente se `isLogado` for true)
```

**2. Atribuição Condicional**

```javascript
const preco = 100;
const desconto = preco > 50 && 10;
// desconto será 10 apenas se `preco` for maior que 50
console.log(desconto); // Saída: 10
```

**3. Renderização Condicional em React**

No React, a forma reduzida com `&&` é amplamente usada para renderizar elementos condicionalmente.

```javascript
const isAdmin = true;
return (
  <div>
    <h1>Bem-vindo!</h1>
    {isAdmin && <button>Gerenciar Usuários</button>}
  </div>
);
// Renderiza o botão "Gerenciar Usuários" apenas se `isAdmin` for true
```

### Comparação entre Ternário e Forma Reduzida com `&&`

- **Operador Ternário**: Útil para condições onde precisamos de um valor para `true` e outro para `false`.
- **Forma Reduzida com `&&`**: Melhor para condições onde apenas o `true` precisa ser tratado e não há ação específica para o `false`.

#### Exemplo Completo

```javascript
const saldo = 150;
const mensagemSaldo = saldo >= 100 ? "Saldo suficiente" : "Saldo insuficiente";

console.log(mensagemSaldo); // Saída: 'Saldo suficiente'

// Forma reduzida para exibir uma mensagem se uma condição for verdadeira
saldo >= 100 && console.log("Compra permitida"); // Saída: 'Compra permitida'
```

### Resumo

- **Operador Ternário**: Ideal para condições simples, retornando um valor para `true` e outro para `false`.
- **Forma Reduzida com `&&`**: Executa uma ação ou retorna um valor somente se a condição for verdadeira, simplificando a sintaxe para situações unilaterais.
