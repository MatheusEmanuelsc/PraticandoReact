primeiro instale  o webpack

npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader
-D

2. Criar o Arquivo de Configuração do Webpack
Crie um arquivo webpack.config.js na raiz do seu projeto:

javascript
Copiar código
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