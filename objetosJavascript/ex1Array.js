
console.log(`Trabalhando com listas`);


//Declaração normal
const salvador = "Salvador";
const saoPaulo = `São Paulo`;

console.log(`Destinos: ${saoPaulo} ${salvador}`  );

//Array - Listas

const destinos = ["São Paulo", "Salvador", "Rio"];

console.log(`Destinos: ${destinos}`);

//add um novo elemento ao array

destinos.push('curitiba'); 

console.log(`Destinos: ${destinos}`);

//deletando um elemento passando seu indice
//o 1 é a quantidade de itens q eu quero deletar apos o indice
destinos.splice(2, 1);

console.log(`destinos: ${destinos}`);

//exibindo só o elemento do indice q quero
console.log(destinos[1]);