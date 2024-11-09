import { describe, expect, test } from "@jest/globals";
import { getUser, getUsuarioActivo } from "../base-test/05-funciones";

describe("deve retornar um obj", () => {
  test("getUser deve retornar obj", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUser deve retornar obj", () => {
    const testUser = {
      uid: "ABC567",
      username: "jao",
    };
    const user = getUsuarioActivo("jao");

    expect(testUser).toEqual(user);
  });
});
