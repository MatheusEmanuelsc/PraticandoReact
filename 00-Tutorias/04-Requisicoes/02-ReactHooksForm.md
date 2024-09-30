# Resumo sobre React Hook Form, Yup e Axios

## Índice

1. [Introdução ao React Hook Form](#introdução-ao-react-hook-form)
2. [Instalação](#instalação)
3. [Uso Básico do React Hook Form](#uso-básico-do-react-hook-form)
4. [Integração com Yup](#integração-com-yup)
5. [Validação de Formulários](#validação-de-formulários)
6. [Uso do Axios para Enviar Dados](#uso-do-axios-para-enviar-dados)
7. [Exemplo Completo](#exemplo-completo)
8. [Considerações Finais](#considerações-finais)

---

## Introdução ao React Hook Form

**React Hook Form** é uma biblioteca para gerenciamento de formulários em aplicações React. Ela é leve, performática e permite fácil integração com a API de formulários do React, utilizando hooks.

## Instalação

Para instalar o React Hook Form, Yup e Axios, use o npm ou yarn:

```bash
npm install react-hook-form yup @hookform/resolvers axios
```

ou

```bash
yarn add react-hook-form yup @hookform/resolvers axios
```

## Uso Básico do React Hook Form

O uso básico do React Hook Form envolve o uso do hook `useForm` para registrar os campos do formulário e gerenciar seu estado.

```javascript
import React from "react";
import { useForm } from "react-hook-form";

const MeuFormulario = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Nome" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MeuFormulario;
```

## Integração com Yup

**Yup** é uma biblioteca de validação de esquema que pode ser usada para validar os dados dos formulários. Ao integrá-la com o React Hook Form, você pode garantir que os dados atendam a critérios específicos antes de serem processados.

```javascript
import * as Yup from "yup";

const esquema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
});
```

## Validação de Formulários

Para usar Yup com o React Hook Form, utilize o `resolver` do `@hookform/resolvers`. Isso permite que você valide os dados do formulário ao enviá-los.

```javascript
import { yupResolver } from "@hookform/resolvers/yup";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(esquema),
});
```

## Uso do Axios para Enviar Dados

Após validar os dados, você pode usar o Axios para enviar essas informações para uma API. Aqui está um exemplo de como isso é feito.

```javascript
import axios from "axios";

const onSubmit = async (data) => {
  try {
    const resposta = await axios.post("https://api.exemplo.com/endpoint", data);
    console.log("Dados enviados com sucesso:", resposta.data);
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
  }
};
```

## Exemplo Completo

Aqui está um exemplo completo que ilustra como usar o React Hook Form, Yup e Axios em um componente React:

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

// Definindo o esquema de validação
const esquema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
});

const MeuFormulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(esquema),
  });

  const onSubmit = async (data) => {
    try {
      const resposta = await axios.post(
        "https://api.exemplo.com/endpoint",
        data
      );
      console.log("Dados enviados com sucesso:", resposta.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Nome" />
      {errors.nome && <p>{errors.nome.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MeuFormulario;
```

## Considerações Finais

A combinação de **React Hook Form**, **Yup** e **Axios** oferece uma solução poderosa para gerenciar formulários em aplicações React, com validação robusta e fácil integração com APIs. Essa abordagem melhora a experiência do desenvolvedor e do usuário, garantindo que os dados sejam corretamente validados e enviados.
