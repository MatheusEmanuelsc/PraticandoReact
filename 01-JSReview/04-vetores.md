```javascript
// 1. Forma recomendada de criar um array vazio
const vetor = []; // Um array vazio, ideal para adicionar elementos mais tarde

// Adicionando elementos ao array
vetor.push(1); // Adiciona o número 1 ao final do array
vetor.push(2, 3, 4); // Adiciona múltiplos valores ao final do array
vetor.unshift(0); // Adiciona o número 0 ao início do array
// vetor agora é: [0, 1, 2, 3, 4]

// Removendo elementos do array
vetor.pop(); // Remove o último elemento (4)
vetor.shift(); // Remove o primeiro elemento (0)
// vetor agora é: [1, 2, 3]

// Acessando elementos do array
console.log(vetor[0]); // Imprime o primeiro elemento: 1
console.log(vetor[vetor.length - 1]); // Imprime o último elemento: 3

// Iterando sobre os elementos do array
vetor.forEach((elemento) => {
  console.log(elemento); // Imprime cada elemento do array (1, 2, 3)
});

// 2. Criando um array com tamanho pré-definido (não recomendado para adicionar elementos posteriormente)
const outraForma = new Array(100); // Cria um array com 100 posições vazias (undefined)

// Inicializando o array com valores padrão
outraForma.fill(0); // Define todas as posições para o valor 0
console.log(outraForma); // Imprime um array com 100 zeros

// 3. Usando o método Array.from() para criar um array com uma sequência
const arraySequencial = Array.from({ length: 5 }, (_, index) => index + 1);
// Cria um array [1, 2, 3, 4, 5] onde cada valor é calculado usando o índice
console.log(arraySequencial);

// 4. Concatenando arrays
const vetor1 = [1, 2, 3];
const vetor2 = [4, 5, 6];
const vetorConcatenado = vetor1.concat(vetor2); // Concatena os dois arrays
console.log(vetorConcatenado); // Imprime [1, 2, 3, 4, 5, 6]

// 5. Spread operator (...) para expandir elementos do array
const vetorExpandido = [...vetor1, ...vetor2]; // Equivalente ao concat
console.log(vetorExpandido); // Imprime [1, 2, 3, 4, 5, 6]

// 6. Acessando e manipulando partes do array
const parteDoArray = vetorConcatenado.slice(1, 4); // Cria um novo array com elementos do índice 1 ao 3
console.log(parteDoArray); // Imprime [2, 3, 4]

// Modificando partes do array com splice
vetorConcatenado.splice(2, 2, 8, 9);
// Remove 2 elementos a partir do índice 2 e adiciona 8 e 9
console.log(vetorConcatenado); // Imprime [1, 2, 8, 9, 5, 6]

// 7. Encontrando elementos em um array
const index = vetorConcatenado.indexOf(5); // Procura o índice do valor 5
console.log(index); // Imprime 4 (posição do valor 5 no array)

const contemQuatro = vetorConcatenado.includes(4); // Verifica se o array contém o valor 4
console.log(contemQuatro); // Imprime false, pois 4 foi removido anteriormente

// 8. Filtrando elementos no array
const numerosPares = vetorConcatenado.filter((numero) => numero % 2 === 0);
// Filtra apenas os números pares
console.log(numerosPares); // Imprime [2, 8, 6]

// 9. Transformando elementos com map()
const dobroDosValores = vetorConcatenado.map((numero) => numero * 2);
// Retorna um novo array com cada elemento multiplicado por 2
console.log(dobroDosValores); // Imprime [2, 4, 16, 18, 10, 12]

// 10. Reduzindo o array a um único valor
const soma = vetorConcatenado.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);
console.log(soma); // Imprime a soma de todos os elementos do array: 31

// 11. Ordenando um array
const arrayDesordenado = [5, 3, 8, 1];
arrayDesordenado.sort((a, b) => a - b); // Ordena o array em ordem crescente
console.log(arrayDesordenado); // Imprime [1, 3, 5, 8]
arrayDesordenado.reverse(); // Inverte a ordem para decrescente
console.log(arrayDesordenado); // Imprime [8, 5, 3, 1]

// 12. Manipulando arrays bidimensionais
const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];

matriz.forEach((linha) => {
  console.log(linha); // Imprime cada linha da matriz
  linha.forEach((elemento) => {
    console.log(elemento); // Imprime cada elemento de cada linha
  });
});

// 13. Transformando uma matriz em um array plano (flat)
const arrayPlano = matriz.flat(); // Achata a matriz em um único array
console.log(arrayPlano); // Imprime [1, 2, 3, 4, 5, 6]
```

### Explicações dos principais conceitos no código

- **Manipulação básica**: Usar `push`, `pop`, `unshift`, e `shift` para adicionar e remover elementos.
- **Concatenar e expandir**: Usar `concat` e o operador de espalhamento `...` para combinar arrays.
- **Acessar e manipular partes**: `slice` para extrair e `splice` para modificar diretamente.
- **Mapear, filtrar e reduzir**: `map`, `filter`, e `reduce` para transformar, filtrar e acumular valores no array.
- **Ordenação**: `sort` e `reverse` para ordenar e inverter.
- **Arrays bidimensionais**: Representam matrizes e podem ser manipulados com loops aninhados ou o método `flat` para achatamento.

Essas práticas cobrem uma boa base para manipulação eficiente de arrays em JavaScript.
