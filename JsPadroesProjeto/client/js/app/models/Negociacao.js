class Negociacao{

    constructor(data, quantidade, valor){ //os atributos, as caracteristicas da classe eu defino atraves do constructor
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); //pra nao poder alterar os valores
    }

    get volume(){ 
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date (this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }

}

/*o _ antes do nome do atributo da classe é uma convenção
dizendo que a propriedade só pode ser acessada pelos proprios
metodos da classe... isso impede fazer alterações por fora
onde não deveria */

/* o GET serve pra acessar e exibir esses atributos, ele é
um metodo acessador pra metodos private (com underline _), somente leitura*/

//funções dentro de classe chamam-se metodos