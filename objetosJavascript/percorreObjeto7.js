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

//metodo for in serve pra percorrer objetos

let relatorio= " ";

for(let informacao in cliente){
    if(typeof cliente[informacao] === "object" || typeof cliente[informacao] === "function"){
        continue
    } else {
        relatorio += ` 
        ${informacao} - ${cliente[informacao]}`;
    }
}

console.log(relatorio); //exibindo o for acima