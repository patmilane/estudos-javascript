// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'retangulo'){
//     area = altura * comprimento;

// } else {
//     area = (altura * comprimento) / 2;

// }

// console.log(area);

///////NOVO EXERCICIO
// const forma = 'quadrado';
// const altura = 5;
// const comprimento = 7;
// let area;


// if(forma === 'quadrado'){
//     area = altura * comprimento;

// } else {
//     area = (altura*comprimento)/2;
// }

// console.log(area);

///////NOVO EXERCICIO


// const numero = 456;
// let numeroString = '456';

// //pra converter 
// console.log(numero + Number(numeroString));

//outra forma de converter

// numeroString = Number("456");

// console.log(typeof numeroString);

// //converter pra string 

// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); 

// // Convertendo strings pra  calcular a área de um retângulo
// let largura = "10";
// let altura = "5";
// console.log(Number(largura) * Number(altura)); 

/// // teremos a conversão de String para números realizado usando o + antes das variáveis
//  let largura = "10";
//  let altura = "5";
//  console.log( + largura * + altura); 

///////NOVO EXERCICIO

 const idadeMinima = 18;

 const idadeCliente = 16;

 if(idadeCliente < idadeMinima){
     console.log("não pode beber");
 } else {
     console.log ("pode beber")
 }

 //RESUMINDO (OPERADOR TERNÁRIO) - mesma coisa q acima

                //condição(tipo if)            //true          //false
 console.log(idadeCliente < idadeMinima ? "não pode beber": "pode beber")



 ///////NOVO EXERCICIO

 //Template String  

 const nome = 'Ju';
 const idade = 2021-1996;
 const cidade = "mococa"

 const apresentacao = 'Meu nome é ' + nome + 
            " idade " + idade;

 console.log(apresentacao);

 //com template string

 const apresentacaoTemplate = `Meu nome é ${nome} idade ${idade}`;

console.log(apresentacaoTemplate);