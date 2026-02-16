/**************************************************************************************************************
 * Objetivo: Arquivo responsável pelas operações solicitadas que são: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO 
 * Autora: Daniele Silva Santos
 * Data: 13/02/2026
 * Versão: 1.0
***************************************************************************************************************/

function somar (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroDois == '' || isNaN(numeroDois)){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) + Number(numeroDois)}`)  
        return true
    }
}

function subtrair (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroDois == '' || isNaN(numeroDois)){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) - Number(numeroDois)}`)  
        return true
    }
}

function multiplicar (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroDois == '' || isNaN(numeroDois)){
        return false
        
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) * Number(numeroDois)}`)  
        return true
        
    }
}

function dividir (numeroUm, numeroDois){
    let primeiroNumero = numeroUm
    let segundoNumero = numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroUm <=0 || numeroDois == '' || isNaN(numeroDois) || numeroDois <=0){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) / Number(numeroDois)}`)  
        return true
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}