export class PESSOA {
    codigo
    nome
    _cpf

    get cpf(){
        return this._cpf
    }
    constructor(codigo,nome, cpf){
        this.codigo = codigo
        this.nome = nome
        this._cpf = cpf

    }
}

