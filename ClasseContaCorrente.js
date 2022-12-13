
import {PESSOA} from "./ClassePessoa.js"
export class CONTACORRENTE {

    static qtdeContas = 0
    codigoConta;
    agencia;
    /*Eu quero atribuir somente se for do tipo (instância) de cliente
    set não é um metodo é um acessor. 
    Se não tiver este set, é possível colocar qualquer valor no nome do cliente (0 por exemplo)*/
    _cliente; 
    set cliente (novoValor){
        if (novoValor instanceof PESSOA){
            this._cliente = novoValor
        }else{
            console.log ("O cliente não foi cadastrado")
        }
    }
    //get não é um metodo é um acessor
    //se não tiver o get, no console.log(cliente1.cliente) retorna undefined
    get cliente(){
        return this._cliente
    }
    
    //Eu não preciso proteger, somente retornar
    /*Sem o set, não é permitido instanciar sem deposito ou saque
    pois está bem encapsulado*/
    _saldo = 0    
    get saldo(){
        return this._saldo
    }

    constructor(codigoConta,agencia,cliente){
        this.codigoConta = codigoConta
        this.agencia = agencia
        this.cliente = cliente
        CONTACORRENTE.qtdeContas ++//para contat a quantidade de contas
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Depósito menor que R$1,00.")
            return //return com função de early return (sai do bloco se true sem retornar nada)
        }
        this._saldo += valor
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor //return com função de retornar um valor
        } else {
            console.log("Saldo insuficiente")
        }
    }

    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
    
}