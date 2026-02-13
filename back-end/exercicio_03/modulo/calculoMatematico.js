/*******************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas operações solicitadas que são: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO para este projeto
 * Autora: Daniele Silva Santos
 * Data: 13/02/2026
 * Versão: 1.0
********************************************************************************************************************************/

function SOMA (numeroUm, numeroDois){
    let resultado = numeroUm + numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroUm <= 0 || numeroDois == '' || isNaN(numeroDois) || numeroDois <= 0){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm) + Number(numeroDois)}`)  
    }
}

function subtracao (numeroUm, numeroDois){
    let resultado = numeroUm - numeroDois

    if(numeroUm == '' || isNaN(numeroUm) || numeroUm <= 0 || numeroDois == '' || isNaN(numeroDois) || numeroDois <= 0){
        return false
    }else{
        console.log(`O resultado do Cálculo Matemático é ${Number(numeroUm)-Number(numeroDois)}`)  
    }
}

