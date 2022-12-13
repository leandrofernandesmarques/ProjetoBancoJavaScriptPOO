//Importando Classes
import {PESSOA} from "./ClassePessoa.js"
import {CONTACORRENTE} from "./ClasseContaCorrente.js"

//Instanciando Clientes
const cliente1 = new PESSOA(234,"Leandro","282.876.234-89" )//na classe cliente agora temos um construtor
const cliente2 = new PESSOA(235,"Alice","282.846.534-56" )
const cliente3 = new PESSOA(238,"Lucas","222.222.222-88")

//Instanciando Contas Correntes
const conta1 = new CONTACORRENTE(2001,1001,cliente1)
const conta2 = new CONTACORRENTE(2002,1001,cliente2)
const conta3 = new CONTACORRENTE(2004,1001,cliente3)
conta1.depositar (1000)
conta1.sacar(150)
conta1.trasferir(100,conta3)



//Realizando a transferência
let valor = 200
conta1.trasferir (valor, conta2)
console.log (conta1)
console.log (conta2)
console.log (conta3)


