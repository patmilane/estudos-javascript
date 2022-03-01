//EXECUÇÃO

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"; //importando as classe

const cliente1 = new Cliente(); //1 2
cliente1.nome = "Pati";
cliente1.cpf = 545645334634;

const cliente2 = new Cliente(); 
cliente2.nome = "Alice";
cliente2.cpf = 564558774654;

const contaCorrentePati = new ContaCorrente();
contaCorrentePati.agencia = 1001;

contaCorrentePati.depositar(200);
const valorSacado = contaCorrentePati.sacar(50); //pra me retornar qto foi sacado
console.log("valor sacado: " + valorSacado);

console.log(contaCorrentePati);






/* 1- criando uma variavel para acessar o cliente */

/* 2 - Quando usamos a chamada new Cliente(), podemos
 afirmar que estamos criando uma "instância" dessa classe */

 /* 3 - o this nesse caso está apontando pra contaCorrente
 do cliente q ela esta no momento, não sendo necessario identificar
 dentro do objeto qual o cliente */