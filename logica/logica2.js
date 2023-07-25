const letra = (letras) => {
  return letras.filter((letra) => typeof letra === "string");
};

const numero = (numeros) => {
  return numeros.filter((numero) => typeof numero === "number");
};

const maiorNumero = (numeros) => {
  if (numeros.length === 0) return null;
  return Math.max(...numeros);
};

const menu = (op, arr) => {
  switch (op) {
    case 1:
      return letra(arr);
    case 2:
      return numero(arr);
    case 3:
      const numberMaior = numero(arr);
      return maiorNumero(numberMaior);
    default:
      return "nenhuma função encontrada";
  }
};

//menu(2, [10, 122, 15]);

module.exports = { letra, numero, maiorNumero, menu };
