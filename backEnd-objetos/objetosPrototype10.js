function cliente(nome, cpf, email, saldo){

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

//adicionando valores ao construtor acima
const andre = new cliente("André", "123456789", "and@hotmail.com", 100);

console.log(andre);

//criando poupança

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){

    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new clientePoupanca("ju", "555557665", "ju@mail", 150, 200);

console.log(ju);

//acessando e depositando 
clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30); //chamando o metodo criado acima  e depositando o valor desejado

console.log(ju.saldoPoup); //exibindo apenas o saldo da poupança