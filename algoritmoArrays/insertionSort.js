const livros = require('./livrariaOrdenar');

function insertionSort(lista){

    for(let i = 0; i < lista.length; i++){

        while(i > 0 && lista[i].preco < lista[i - 1].preco){
            /*tem que ser i > 0 pq como esta voltando, ele vai dar erro ao 
            não encontrar o 0 - 1 (índice -1) ... ou poderia fazer o For
            começar por 1, daria na mesma*/

            let itemAnalise = lista[i];
            let itemAnterior = lista[i - 1];

            //trocando o livro de lugar se o anterior for menor
            lista[i] = itemAnterior;
            lista[i - 1] = itemAnalise;

            i--;   //ele esta analisando o anterior e voltando, então é i--
        }
    }
    console.log(lista);
}

insertionSort(livros);