var estado;
var op1;
var op2;
var resultado;
var operacao;


let calculadora = {
    numeroArray : new Array(),
    
    inicializacao(){
        estado='inicializacao';
        this.display();
    },
    
    adicao() {
        operacao = 'adicao'; 
        estado='operando2';
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    subtracao(){
        operacao = 'subtracao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    divisao(){
        operacao = 'divisao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    multiplicacao(){
        operacao = 'multiplicacao';
        estado='operando2';
        this.numeroArray=[]; 
    },

    ac(){
        calculadora.inicializacao();
        this.numeroArray=[];
    },
    
    del(){
        this.numeroArray.pop();
        this.proximoNumero();
        this.display();
    },
    
    igual(){
        switch (operacao){
            
            case 'adicao':
            resultado = op1+op2;
            estado ='resultado';
            this.display();
            break;

            case 'subtracao':
            resultado = op1-op2;
            estado ='resultado';
            this.display();
            break;

            case 'divisao':
            resultado = op1/op2;
            estado ='resultado'
            this.display();
            break;

            case 'multiplicacao':
            resultado = op1*op2;
            estado ='resultado'
            this.display();
            break;
            
        }
            
    },
    display(){
        switch (estado){

            case'inicializacao':
                document.getElementById("display").innerText = 'AC';
                estado='operando1';
                break;

            case 'operando1':
                document.getElementById("display").innerText = op1;
                break;
            
            case 'operando2':
                document.getElementById("display").innerText = op2;
                break;
            
            case 'resultado':
                document.getElementById("display").innerText = resultado;
                estado='operando1';
                break;
        }
    },
  
    proximoNumero(digito){
                    switch (estado){
                        case'operando1':
                            this.numeroArray.push(digito);
                            op1=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                        case 'operando2':
                            this.numeroArray.push(digito);
                            op2=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                    }

    },

}