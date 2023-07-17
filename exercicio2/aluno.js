// Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
// Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
// Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
// Exiba o array resultante no console, ordenado em ordem decrescente de média.


const alunos = [
  {
    nome: "Gabriel",
    nota1: 8,
    nota2: 9
  },
  {
    nome: "Camila",
    nota1: 7,
    nota2: 6
  },
  {
    nome: "Breno",
    nota1: 6,
    nota2: 10
  },
  {
    nome: "Abram",
    nota1: 10,
    nota2: 9
  }
]

const alunosMedia = alunos.map((aluno) => {
  const media = ((aluno.nota1 + aluno.nota2) / 2);
  return {nome: aluno.nome, media: media};
});

alunosMedia.sort((aluno1, aluno2) => aluno1.media - aluno2.media);
console.log(alunosMedia);