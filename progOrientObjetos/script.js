//EXECUÇÃO

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"; //importando as classe

const cliente1 = new Cliente("pati", 11254684555); //1 2


const contaCorrentePati = new ContaCorrente(1002, cliente1);
numeroDeContas++;
contaCorrentePati.depositar(200);

contaCorrentePati.cliente = cliente1;
console.log(contaCorrentePati);

const cliente2 = new Cliente("Alice", 564558774654); 
const contaCorrenteAlice = new ContaCorrente(1001, cliente2); //criando conta alice
numeroDeContas++;

let valor = 200;
contaCorrentePati.transferir(valor, contaCorrenteAlice); //transferindo pra alice

console.log(cliente1.cpf);


/* 1- criando uma variavel para acessar o cliente */

/* 2 - Quando usamos a chamada new Cliente(), podemos
 afirmar que estamos criando uma "instância" dessa classe */

 /* 3 - o this nesse caso está apontando pra contaCorrente
 do cliente q ela esta no momento, não sendo necessario identificar
 dentro do objeto qual o cliente */