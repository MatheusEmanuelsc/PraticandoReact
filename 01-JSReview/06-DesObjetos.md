A desestruturação de objetos em JavaScript permite extrair valores de propriedades de um objeto e armazená-los em variáveis de uma forma simplificada e eficiente. Veja como utilizá-la e as melhores práticas, com exemplos comentados:

```javascript
// Exemplo Básico de Desestruturação
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

// Desestruturação direta das propriedades em variáveis
const { nome, idade, cidade } = pessoa;

console.log(nome); // Imprime "João"
console.log(idade); // Imprime 30
console.log(cidade); // Imprime "São Paulo"

// 1. Desestruturação com Alias (apelidos)
// Usado para renomear variáveis ao desestruturar
const { nome: nomePessoa, idade: idadePessoa } = pessoa;

console.log(nomePessoa); // Imprime "João"
console.log(idadePessoa); // Imprime 30

// 2. Valores Padrão
// Define valores padrão caso a propriedade não exista no objeto
const usuario = {
  username: "admin",
};

const { username, senha = "senha123" } = usuario; // "senha" não existe no objeto, então usa o valor padrão
console.log(username); // Imprime "admin"
console.log(senha); // Imprime "senha123"

// 3. Desestruturação em Funções
// Passa apenas as propriedades necessárias como parâmetros desestruturados
function exibirPerfil({ nome, idade, cidade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

exibirPerfil(pessoa); // Chama a função e exibe "Nome: João, Idade: 30, Cidade: São Paulo"

// 4. Desestruturação Aninhada
// Permite acessar propriedades dentro de objetos aninhados
const produto = {
  nome: "Notebook",
  especificacoes: {
    peso: "1.5kg",
    cor: "Prata",
  },
};

const {
  especificacoes: { peso, cor },
} = produto;

console.log(peso); // Imprime "1.5kg"
console.log(cor); // Imprime "Prata"

// 5. Desestruturação com Rest (...)
// Captura propriedades restantes em um novo objeto
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Azul",
};

const { marca, modelo, ...resto } = carro;

console.log(marca); // Imprime "Toyota"
console.log(modelo); // Imprime "Corolla"
console.log(resto); // Imprime { ano: 2022, cor: "Azul" }

// 6. Parâmetros de Função com Desestruturação e Valores Padrão
// Útil em funções que recebem objetos com muitos parâmetros
function criarUsuario({
  username = "visitante",
  idade = 18,
  ativo = true,
} = {}) {
  return {
    username,
    idade,
    ativo,
  };
}

const novoUsuario = criarUsuario({ username: "Carlos", idade: 25 });
console.log(novoUsuario); // Imprime { username: 'Carlos', idade: 25, ativo: true }

// 7. Desestruturação de Arrays em Objetos
// Ao desestruturar um array presente em um objeto
const empresa = {
  nome: "Tech Corp",
  funcionarios: ["Ana", "Carlos", "Pedro"],
};

const {
  funcionarios: [func1, func2],
} = empresa;

console.log(func1); // Imprime "Ana"
console.log(func2); // Imprime "Carlos"

// 8. Desestruturação de Objetos Complexos com Propriedades Não-existentes
const configuracao = {
  resolucao: "1080p",
  modo: "noturno",
};

// Propriedades não existentes "tamanho" e "bateria" com valores padrão
const {
  resolucao,
  tamanho = "15 polegadas",
  bateria = "5000mAh",
} = configuracao;

console.log(tamanho); // Imprime "15 polegadas"
console.log(bateria); // Imprime "5000mAh"
```

### Resumo dos Principais Conceitos

1. **Desestruturação Simples**: Facilita a extração de várias propriedades ao mesmo tempo.
2. **Alias**: Renomeia variáveis durante a desestruturação para evitar conflitos de nomes.
3. **Valores Padrão**: Define valores para propriedades ausentes.
4. **Desestruturação em Funções**: Desestruturando parâmetros permite acessar valores diretamente.
5. **Desestruturação Aninhada**: Acessa valores dentro de objetos aninhados.
6. **Rest Operator (...resto)**: Captura propriedades restantes em um novo objeto.
7. **Arrays Dentro de Objetos**: Extrai valores específicos de arrays presentes em objetos.

Essas práticas tornam o código mais limpo, legível e eficiente, especialmente ao lidar com objetos complexos.
