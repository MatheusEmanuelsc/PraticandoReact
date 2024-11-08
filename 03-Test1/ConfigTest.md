## Configurando Jest em um Projeto com Vite e React

Para configurar o Jest em um projeto React com Vite, siga os passos abaixo:

### 1. **Instale o Jest e Tipos do Jest**

Primeiro, instale o Jest e os tipos necessários para o TypeScript (caso esteja utilizando). Use o comando abaixo para instalar as dependências de desenvolvimento:

```bash
npm install --save-dev jest
npm add -D @types/jest
```

### 2. **Adicione o Script de Teste no `package.json`**

Adicione um script no arquivo `package.json` para facilitar a execução dos testes com o `npx`. Isso garante que o Jest seja executado corretamente sem a necessidade de instalá-lo globalmente, evitando o erro "jest: not found".

```json
{
  "scripts": {
    "test": "npx jest"
  }
}
```

### 3. **Opção para Assistir Mudanças em Tempo Real com `--watchAll`**

Você pode usar a opção `--watchAll` para rodar os testes automaticamente sempre que houver alterações no código. Isso é útil para testes contínuos durante o desenvolvimento. Atualize o script de teste da seguinte forma:

```json
{
  "scripts": {
    "test": "npx jest --watchAll"
  }
}
```

Com isso, o Jest ficará "observando" as mudanças nos arquivos e rodará os testes automaticamente sempre que você fizer alterações.

### 4. **Crie a Pasta de Testes**

Embora opcional, é recomendado organizar seus testes em uma pasta dedicada, como `tests`, para manter o código mais organizado.

```bash
mkdir tests
```

### 5. **Execute os Testes**

Para rodar os testes, utilize o comando:

```bash
npm run test
```

Ou, se preferir, pode rodar diretamente com `npx`:

```bash
npx jest
```

### Conclusão

Com esses passos, você terá o Jest configurado corretamente para rodar seus testes em um projeto React com Vite. O uso do `--watchAll` é uma ótima maneira de acompanhar as mudanças e realizar testes contínuos enquanto desenvolve.
