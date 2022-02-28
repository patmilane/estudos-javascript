class Conta {

    constructor(titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }

}

var conta = new Conta('pati', 255);
conta.deposita(5000);
conta.deposita(7500);


console.log(`A cliente ${conta.titular} da conta 
${conta.conta} possui ${conta.saldo} depositados`);
