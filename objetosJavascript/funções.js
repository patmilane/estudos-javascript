

//FUNÇÕES 
//DECLARAÇÃO DE FUNÇÃO

function imprime(texto) {

    console.log(texto);
 }

//executando a função
// imprime("vida loka");
// imprime("outro texto");

// FORMAS DE ESCREVER FUNÇÕES

function soma() {
    return 2 + 2;
}

imprime(soma());

//PARAMETROS - PRA REUTILIZAR CODIGOS (o acima só retorna 2+2)

function soma2(num1, num2) {
    return num1 + num2;
}

imprime(soma2(5, 10));
imprime(soma2(25, 15));

function pessoa(nome, idade){
    return `Nome é ${nome} e idade ${idade}`;
}

imprime(pessoa("shen", 87));


//
function multiplica(num1, num2){
    return num1 * num2;
}

imprime(multiplica(soma2(10,5 ), soma2(5,10)));

//

function multiplica(num1 = 1, num2 = 3){
    return num1 * num2;
}

imprime(multiplica(soma2(10,5 )));
                    //se algum dos parametros n for passado, 
                    //ele substituirá com o valor passado la em cima na função


//EXPRESSÃO DE FUNÇÃO - 2ª FORMA DE DECLARAR

//comum
function minhaFuncao(parametro){
    //codigo
}

minhaFuncao("lalala");

//expressao de função - nova forma de declarar

const soma3 = function(num1, num2) { return num1 + num2}

imprime(soma3(2, 5));


//nesse 1º tipo vc consegue chamar a função antes do codigo 
//da função, fora dela, global
console.log(apresentar(2,6));

function apresentar() {
    return "ola";
} 

//nesse 2º tipo vc só pode usar a função depois do codigo dela
//se nao ela num é inicializada
console.log(soma2(2,3)); //da erro, tem q ser depois

const soma5 = function(num1, num2) { return num1 + num2}


//////// ARROW FUNCTION - 3ª FORMA


            //parametro
const novaArrow = nome => `meu nome é ${nome}`;
                    //flecha é o return praticamente

const somaArrow = (num1, num2) => num1 + num2;
    console.log(somaArrow(10, 12));


    //ARROW FUNCTION COM MAIS DE 1 LINHA:

const somaNumArrow = (num1, num2) => {
    if (num1 < 10 || num2 < 10){
        return num1 + num2;
    } else {
        return `Numero é maior`
    }
}

console.log(somaNumArrow(5, 70));


