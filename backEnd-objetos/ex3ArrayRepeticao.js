console.log(`Array com Loop`);

const destinos = ["São Paulo", "Salvador", "Rio", "Minas"];

const idade = 14;
const estaAcompanhada = true;
let passagemComprada = false;
const destinoEscolhido = "bb";

//console.log(`Destinos: ${destinos}`);

const podeComprar = idade >= 18 || estaAcompanhada == true;

    let contador = 0;
    let destinoExiste = false;

   while(contador < 4){

       if(destinos[contador] == destinoEscolhido){
            destinoExiste = true;
            break;

       } 
       contador++; //pra nao entrar em loop infinito

   }

   console.log("Destino existe : ", destinoExiste);

   if (podeComprar && destinoExiste){
       console.log("Boa viagem!!!");
   } else {
       console.log("Desculpe, tivemos um erro");
   }


for(let cont=0; cont < 4; cont++){
    if(destinos[contador] == destinoEscolhido){
        destinoExiste = true;
        break;

   } 
}


