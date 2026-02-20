/**************************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **************************************************************************************************/

//toLowerCase() -> Retorna a string em minusculo
//toUpperCase() -> Retorna a string em MAIUSULO


/*Modelo de função anonima
Objetivo da função: Calcular as 4 operações matemáticas*/
const calcular = function(numero1, numero2, operador){
    let valor1 = Number (numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    //Condicionais para validar qual o tipo de operação matemática
    if(operadorMatematico == 'SOMAR'){
        resultado = valor1 + valor2
    }else if(operadorMatematico == 'SUBTRAIR'){
        resultado = valor1 - valor2
    }else if(operadorMatematico == 'MULTIPLICAR'){
        resultado = valor1 * valor2
    }else if(operadorMatematico == 'DIVIDIR'){
        resultado = valor1 / valor2
    }

    return Number(resultado).toFixed(2)
}

console.log(calcular(10, 20, 'DIVIDIR'))