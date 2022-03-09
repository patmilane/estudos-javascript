const livros = require('./livrariaOrdenar');

function insertionSort(lista){

    for(let i = lista.length; i = 0; i--){

        while(i > 0 && lista[i].preco < lista[i - 1].preco){
            
            let itemAnalise = lista[i];
            let itemAnterior = lista[i - 1];

            lista[i] = itemAnterior;
            lista[i - 1] = itemAnalise;

            i++;   //se o For estiver i--, aqui é i++ 
        }
    }

    console.log(lista);
}

insertionSort(livros);