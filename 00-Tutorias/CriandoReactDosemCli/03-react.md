apos ja te executando as 3 etapas

npm i react react-dom -D


crie uma pasta chamada public

depois index html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>

depois criei uma nova pasta chamada src

com nome app.jsx

vc pode adc um codigo pra esta exemplo

const App = () => {
    return <h1>Hello, Webpack and React!</h1>;
  };

export default App;

depois crie index.js

import React from "react";
import {createRoot} from "react-dom/client";
import App from './app';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);

depois ajuste o packcage json

,
  "scripts": {
    "start": "webpack serve --open --hot --mode development",
    "build": "webpack --mode production"
  },