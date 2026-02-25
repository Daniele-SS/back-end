/***************************************************************************
 * Objetivo: Arquivo resposável pelas entradas e saída de dados da aplicação
 * data: 20/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calcular')
let valor1 = 10
let valor2 = 30

let validar = calculosMatematicos.validarDados(valor1, valor2, 'somar')

if(validar){
    let resultado = calculosMatematicos.calcular(valor1, valor2, 'somar')
    console.log(resultado)
}else{
    console.log('Erro ao validar')
}