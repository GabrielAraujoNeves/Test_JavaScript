const array = ["a", 10, "b", "hello", 122, 15];

const numero = array.filter(item => !isNaN(item));

const letras = array.filter(letra => isNaN(letra));

const maiorNumero = Math.max(...numero);

console.log(numero);

console.log(letras);

console.log(maiorNumero);