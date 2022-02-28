const cliente = {
    nome: "Pati",
    idade: 25,
    cpf: "42637771828",
    email: "patimilane@gmail.com",
    fones: ["559912345", "551993679"], //array
    
    dependentes: [{
        nome: "Yuno",
        parentesco: "filha",
        nascimento: "01/01/2015"
    }]
}

cliente.dependentes.push({  //add dependente
    nome: "Caco",
    parentesco: "filho",
    nascimento: "07/02/2004"
})

console.log(cliente);

//filtrando dependente pela data de nascimento
                             //filter retorna um array
const maisNovo = cliente.dependentes.filter(dependente => dependente.nascimento === "01/01/2015");

console.log(maisNovo); //retorna array
console.log(maisNovo[0].nome); //acessando so o nome