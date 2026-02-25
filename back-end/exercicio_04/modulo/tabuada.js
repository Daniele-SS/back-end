/*****************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 * ***************************************************************/

//Import da biblioteca de calculos matemáticos
const calculosMatematicos = require('./calcular')

//Função para imprimir a tabuada usando while
const gerarTabuadaFor = function(tabuada) {
    //Recebe a tabuada a ser gerada
    let tab  = Number(tabuada)
    //let cont = 0
    let resultado

    //Repetição para gerar a tabuada até 10
    for(let cont = 0; cont <=10; cont++){
        //Chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    }
}//Fechamento da const gerarTabuada

gerarTabuadaFor(9)