const cliente = {
    nome: "Pati",
    idade: 25,
    cpf: "42637771828",
    email: "patimilane@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

//percorrer todo o array e exibir todo o objeto

chaves.forEach(info => console.log(cliente[info]));

