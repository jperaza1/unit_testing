const stringAlReves = require("./string");

test(`String la Reves 'Hola' igual a 'aloH'`, () => {
  return stringAlReves("Hola").then((result) => {
    expect(result).toBe("aloH");
  });
});

test("Probando la funcion enviando un string vacion y entrando al catch", () => {
  return stringAlReves().catch((error) => {
    expect(error).toMatch("string Vacio");
  });
});

test("Probando la funcion usando async await ", async () => {
  const result = await stringAlReves("Hola");
  expect(result).toBe("aloH");
});

test("Probando a Mock function que devuelve la palabra 'test'", () => {
  const mockFunction = jest.fn(() => "test");
  const result = mockFunction();
  expect(result).toBe("test");
});
