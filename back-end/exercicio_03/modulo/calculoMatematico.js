/**************************************************************************************************************
 * Objetivo: Arquivo responsável pelas operações solicitadas que são: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO 
 * Autora: Daniele Silva Santos
 * Data: 13/02/2026
 * Versão: 1.0
***************************************************************************************************************/

function somar (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    return Number(numeroUm) + Number(numeroDois)
}

function subtrair (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    return Number(numeroUm) - Number(numeroDois)
}

function multiplicar (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    return Number(numeroUm) * Number(numeroDois)  
}

function dividir (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroDois <=0){
        console.log(`ERRO: Não é possível realizar a Divisão por 0.`)
    }else{
        return Number(numeroUm) / Number(numeroDois)
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}