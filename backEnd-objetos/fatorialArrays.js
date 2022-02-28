function fatorial(){


var numero = prompt("Digite um numero: ");
var fatorial = 1;
var contador = 1;

if (numero < 0){
    alert("numero invalido, favor digitar um valor positivo");

} else {

    while(contador <= numero){
        fatorial = fatorial * contador;

        contador++;
    }

    document.write("<h1> Fatorial de " + numero + " é " + fatorial + "</h1>");
}

}


function array(){

    var qtd = Number(prompt("Digite a quantidade: "));

    var alimento = [];
    var contador = 0;

   while(contador <  qtd){

        item = prompt("Digite a comida: ");
       
        if(item.length % 2 !== 0){

            alimento.push(item);
        }

        contador++;
    }
    
    alert("Alimentos Impares: " + alimento)

}

function arrayFrutas(){

    var frutas = [];

    for(var i = 0; i < 3; i++){
        var adicionarfruta = prompt("Adicione uma fruta: ");

        frutas.push(adicionarfruta);

        alert("fruta " + adicionarfruta + " add com sucesso");

    if(frutas.length % 2 == 0){
        alert(frutas);
    }


    }

    
}


