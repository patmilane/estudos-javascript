const cliente = {
    nome: "Pati",
    idade: 25,
    cpf: "42637771828",
    email: "patimilane@gmail.com",
    fones: ["559912345", "551993679"],      //array
    dependentes: [
        {
        nome: "Yuno",
        parentesco: "filha",
        nascimento: "01/01/2015"} ,
        {
        nome: "Caco",
        parentesco: "filho",
        nascimento: "07/02/2004"
        }  
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);