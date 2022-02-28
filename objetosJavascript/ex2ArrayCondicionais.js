console.log(`Array com Condicionais`);

const destinos = ["São Paulo", "Salvador", "Rio", "Minas"];

const idade = 14;
const estaAcompanhada = true;
const passagemComprada = true;

//console.log(`Destinos: ${destinos}`);

if(idade >= 18 || estaAcompanhada == true){

    console.log(`Boa viagem`);
    destinos.splice(1,1); //removendo item

} else{
    console.log(`Menor de idade, nao posso vender`);
}


console.log(`Embarque:\n`);

if(idade >= 18 && passagemComprada){
    console.log(`Tudo ok, pode embarcar`);

} else {
    console.log("Não pode embarcar");
}




