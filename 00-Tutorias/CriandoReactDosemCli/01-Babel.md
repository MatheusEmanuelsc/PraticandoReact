Para utilizar o babel 

primeiro criei  uma pasta


depois  npm init -y
para iniciar o node

depois utilize esse comando para utilizar o babel

npm install  @babel/core @babel/preset-env @babel/preset-react babel-loader -D

depois crie o arquivo de configuração

.babelrc

{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}