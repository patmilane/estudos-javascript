const clientes = [ {
    nome: "Pati",
    idade: 25,
    cpf: "42637771828",
    email: "patimilane@gmail.com",
    dependentes: [ {
        nome: "Yuno",
        parentesco: "filha",
        nascimento: "01/01/2015"
    }],
},
    {
    nome: "Rosa",
    idade: 28,
    cpf: "37896836869",
    email: "milane@gmail.com",
    dependentes: [ {
        nome: "Caco",
        parentesco: "filho",
        nascimento: "07/02/2004"
        }],
    },
]

//acessando arrays dentro do objeto (espalhamento - spread operator)
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes); //lista em forma de tabela
