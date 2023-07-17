// Crie três módulos separados em arquivos distintos: somaArray.js, multiplicaArray.js e calculaMedia.js.

// No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.

// No módulo multiplicaArray.js, exporte uma função chamada multiplicaArray, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos.

// No módulo calculaMedia.js, exporte uma função chamada calculaMedia, que recebe um array de números como parâmetro e retorna a média aritmética desses números.

// No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.

// Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário.


// import {calculaMedia} from "./calculaMedia"
// import {multiplicaArray} from "./multiplicaArray"
// import {somaArray} from "./somaArray"

const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');

const numeros = [
  15.5, 28.4, 32.13
]

const soma = somaArray(numeros);
const multiplicacao = multiplicaArray(numeros);
const media = calculaMedia(numeros);

console.log(`A soma de todos os numero é ${soma}`);
console.log(`A multiplicação de todos os numero é ${multiplicacao}`);
console.log(`A media dos numeros é ${media}`);