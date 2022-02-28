const precosLivros = [
    {
      titulo: "JavaScript",
      preco: 25
    },
    {
      titulo: "PHP",
      preco: 15
    }, 
    {
      titulo: "Java",
      preco: 30
    }, 
    {
      titulo: "Elixir",
      preco: 50
    }, 
    {
      titulo: "Go",
      preco: 45
    }, 
    {
      titulo: "Python",
      preco: 20
    }
  ];

// Nessa função está apenas encontrando o mais barato, nao está exibindo
const livro = precosLivros;

function menorValor(livro, posicaoInicial){
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < livro.length; atual++) {
        if (livro[atual].preco < livro[maisBarato].preco) {
                          //.preco pois esta comparando somente o campo preco do objeto
            maisBarato = atual;
        }
    }
return maisBarato;
}
//Essa função está trab com a de cima e selecionando e organizando pelos mais baratos

const livros = precosLivros;

for(let i = 0; i < livros.length; i++){
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    let livroMenorPreco = livros[menor];

    //trocando as informações de lugar a cada loop
    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);

