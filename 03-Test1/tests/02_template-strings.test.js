import { describe, expect, test } from "@jest/globals";

import { getSaludo } from "../base-test/02-template-string";

describe("testando template", () => {
  test("sainda deve trata o nome", () => {
    const nome = "Jao";
    const msg = getSaludo(nome);

    expect(msg).toBe(`Hola ${nome}`);
  });
});
