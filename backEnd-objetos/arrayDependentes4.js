const cliente = {
    nome: "Pati",
    idade: 25,
    cpf: "42637771828",
    email: "patimilane@gmail.com",
    fones: ["559912345", "551993679"] //array
}

//exibir todos os telefones
cliente.fones.forEach(fone => console.log(fone));


//Criando Objetos dentro de outros Objetos
cliente.dependentes = {
    nome: "Yuno",
    parentesco: "filha",
    nascimento: "01/01/2015"
}

//alterando o dependente

cliente.dependentes.nome = "Gasai Yuno";

console.log(cliente);


