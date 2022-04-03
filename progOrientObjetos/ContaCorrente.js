import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;

        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){  //3
            this._saldo -= valor; 

            return valor; //devolvendo o valor q foi sacado
        }
    }

    depositar(valor){
        if(valor <= 0) return; //pode usar o if com {} tambem
            /*early return, ele não retorna nada
            apenas especifica pro meu codigo q eu quero q ele pare
            de executar caso a condição do if for verdadeiro*/
    
            this._saldo += valor; //se não entrar no if, ele executa isso
        }

        transferir(valor, conta){
            const valorSacado = this.sacar(valor); //sacando valor
            conta.depositar(valorSacado); //deposita-lo em outra conta
        }
    }

    