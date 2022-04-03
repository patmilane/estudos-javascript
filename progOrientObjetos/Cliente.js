export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
};

/*o export está exportando a class Cliente para que outras partes 
do codigo possam importa-lo e usa-lo*/