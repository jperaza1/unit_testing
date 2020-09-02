const { suma } = require("./suma");

describe("testeando la funcion suma", () => {
  let numero1;
  beforeEach(() => {
    numero1 = 2;
  });

  afterEach(() => {
    numero1 = 0;
  });

  test("Suma 2 + 2", () => {
    expect(suma(numero1, 2)).toBe(4);
  });

  test("Suma 4 + 2", () => {
    expect(suma(4, numero1)).toBe(6);
  });

  test("Suma 5 + 2", () => {
    expect(suma(5, numero1)).not.toBe(5);
  });
});
