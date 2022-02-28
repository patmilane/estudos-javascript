class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

const pati = new Cliente("Pati", "pati@hot.com", "42637771828", 100);


console.log(pati);

pati.exibirSaldo();
