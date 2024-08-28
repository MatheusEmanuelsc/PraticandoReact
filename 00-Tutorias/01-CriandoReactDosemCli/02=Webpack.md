

# Configurando Webpack em um Projeto Node.js

Webpack é uma ferramenta poderosa para empacotar arquivos JavaScript e outros recursos em um projeto. Neste guia, configuraremos o Webpack para um ambiente de desenvolvimento com Babel.

## 1. Instalar o Webpack

Para começar, instale o Webpack e suas dependências essenciais utilizando o seguinte comando:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader -D
```

- `webpack`: O empacotador principal.
- `webpack-cli`: Interface de linha de comando para Webpack.
- `webpack-dev-server`: Servidor de desenvolvimento com Hot Module Replacement (HMR).
- `html-webpack-plugin`: Gera automaticamente um arquivo HTML que inclui o bundle JavaScript.
- `babel-loader`: Integra o Babel com Webpack para transpilar código JavaScript.

## 2. Criar o Arquivo de Configuração do Webpack

Agora, crie um arquivo de configuração do Webpack chamado `webpack.config.js` na raiz do projeto. Este arquivo define como o Webpack irá empacotar os arquivos e configura o servidor de desenvolvimento.

### Exemplo de `webpack.config.js`

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Define o ponto de entrada da aplicação
  entry: './src/index.js',

  // Define onde o Webpack irá salvar os bundles gerados
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Configura o servidor de desenvolvimento
  devServer: {
    static: './dist',
    open: true, // Abre automaticamente o navegador
    hot: true,  // Habilita Hot Module Replacement
    port: 3000, // Define a porta do servidor
  },

  // Configurações de módulos
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica a regra para arquivos .js e .jsx
        exclude: /node_modules/, // Exclui a pasta node_modules
        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar o código
        },
      },
      {
        test: /\.css$/, // Aplica a regra para arquivos .css
        use: ['style-loader', 'css-loader'], // Carrega e injeta CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Aplica a regra para arquivos de imagem
        type: 'asset/resource', // Gera arquivos de recursos estáticos
      },
    ],
  },

  // Plugins que ajudam a customizar o processo de build
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Modelo HTML a ser usado
    }),
  ],

  // Define o modo de desenvolvimento
  mode: 'development',

  // Resolva extensões para permitir omitir a extensão ao importar arquivos
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

### Explicação das Configurações

- **entry**: Define o ponto de entrada da aplicação, geralmente o arquivo principal onde o JavaScript começa.
- **output**: Especifica onde o Webpack salvará o bundle gerado.
- **devServer**: Configurações para o servidor de desenvolvimento, incluindo abertura automática do navegador e HMR.
- **module**: Define regras para manipular diferentes tipos de arquivos, como JavaScript, CSS, e imagens.
- **plugins**: Plugins ajudam a estender as funcionalidades do Webpack. O `HtmlWebpackPlugin` gera um arquivo HTML que inclui automaticamente o bundle gerado.
- **mode**: Define o modo de desenvolvimento, otimizando o processo para desenvolvimento local.
- **resolve**: Permite omitir a extensão `.js` e `.jsx` ao importar módulos.

---

Esse resumo abrange a instalação e configuração básica do Webpack em um projeto Node.js.