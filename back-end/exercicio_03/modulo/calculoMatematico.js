/**************************************************************************************************************
 * Objetivo: Arquivo responsável pelas operações solicitadas que são: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO 
 * Autora: Daniele Silva Santos
 * Data: 13/02/2026
 * Versão: 1.0
***************************************************************************************************************/

function soma (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroDois == '' || isNaN(numeroDois)){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) + Number(numeroDois)}`)  
        return true
    }
}

function subtracao (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroDois == '' || isNaN(numeroDois)){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) - Number(numeroDois)}`)  
        return true
        
    }
}



module.exports = {
    soma,
    subtracao
}