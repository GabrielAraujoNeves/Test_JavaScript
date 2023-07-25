/*const assert = require("assert");
const {letra, numero, maiorNumero, menu} = require("../logica/logica2.js");

describe("Testes das funções",() => {
    it("deve retorna apenas as letras",function () { 
        const input = letra(["a", 10, "b", "hello", 122, 15])
        assert.deepStrictEqual(letra(["a", 10, "b", "hello", 122, 15], ["a", "b", "hello"]));
    });

    it("deve retorna apenas os numeros",function () {
            assert.deepStrictEqual(numero(["a", 10, "b", "hello", 122, 15], [10, 15, 122]));
        });

    it(function () {
        assert.strict(maiorNumero([10, 15, 122]), 122);
    });

    it(function () {
        assert.strictEqual(maiorNumero([]), null);
    });

    it(function () {
        assert.deepStrictEqual(menu(1), ["a", "b", "hello"]);
        assert.deepStrictEqual(menu(2), [10, 122, 15]);
        assert.strictEqual(menu(3), 122);
    });

    it(function () {
        assert.strictEqual(menu(4), "nenhuma funcao encontrada");;
    });

})*/

/*const assert = require("assert");
const { letra, numero, maiorNumero, menu } = require("../logica/logica2.js");

describe("Testes das funções", () => {
  it("deve retornar apenas as letras", () => {
    const input = ["a", 10, "b", "hello", 122, 15];
    const expected = ["a", "b", "hello"];
    const result = letra(input);
    assert.deepStrictEqual(result, expected);
  });

  it("deve retornar apenas os números", () => {
    const input = ["a", 10, "b", "hello", 122, 15];
    const expected = [10, 15, 122];
    const result = numero(input);
    assert.deepStrictEqual(result, expected);
  });

  it("deve retornar o maior número", () => {
    const input = [10, 15, 122];
    const expected = 122;
    const result = maiorNumero(input);
    assert.strictEqual(result, expected);
  });

  it("deve retornar null para uma lista vazia", () => {
    const input = [];
    const expected = null;
    const result = maiorNumero(input);
    assert.strictEqual(result, expected);
  });

  it("deve retornar as opções do menu", () => {
    assert.deepStrictEqual(menu(1), ["a", "b", "hello"]);
    assert.deepStrictEqual(menu(2), [10, 122, 15]);
    assert.strictEqual(menu(3), 122);
  });

  it("deve retornar 'nenhuma função encontrada' para opção inválida", () => {
    const expected = "nenhuma função encontrada";
    const result = menu(4);
    assert.strictEqual(result, expected);
  });
});*/

const assert = require("assert");
const { letra, numero, maiorNumero, menu } = require("../logica/logica2.js");

describe("Testes das funções", () => {
  it("deve retornar apenas as letras", () => {
    const input = ["a", 10, "b", "hello", 122, 15];
    const expected = ["a", "b", "hello"];
    const result = letra(input);
    assert.deepStrictEqual(result, expected);
  });

  it("deve retornar apenas os números", () => {
    const input = ["a", 10, "b", "hello", 122, 15];
    const expected = [10, 122, 15];
    const result = numero(input);
    assert.deepStrictEqual(result, expected);
  });

  it("deve retornar o maior número", () => {
    const input = [10, 15, 122];
    const expected = 122;
    const result = maiorNumero(input);
    assert.strictEqual(result, expected);
  });

  it("deve retornar null para uma lista vazia", () => {
    const input = [];
    const expected = null;
    const result = maiorNumero(input);
    assert.strictEqual(result, expected);
  });

  it("deve retornar as opções do menu", () => {
    const expected = [10, 122, 15];
    const result = menu(2, [10, 122, 15]);
    assert.deepStrictEqual(result, expected);
  });

  it("deve retornar 'nenhuma função encontrada' para opção inválida", () => {
    const expected = "nenhuma função encontrada";
    const result = menu(4);
    assert.strictEqual(result, expected);
  });
});
