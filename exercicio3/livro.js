// Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
// Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
// Crie três objetos da classe Livro, cada um representando um livro diferente.
// Exiba no console as informações de cada livro, utilizando o método obterInformacoes.


class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  obterInformacoes() {
    return `Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`
  }
}

const livros = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
  },
  {
    titulo: "A hora da estrela",
    autor: "Clarice Lispector",
    anoPublicacao: 1977
  },
  {
    titulo: "Iracema",
    autor: "José de Alencar",
    anoPublicacao: 1865
  }
]

const livrosObj = livros.map((livro) => {
  return new Livro(livro.titulo, livro.autor, livro.anoPublicacao);
});

livrosObj.forEach((livro) => {
  console.log(livro.obterInformacoes());
});