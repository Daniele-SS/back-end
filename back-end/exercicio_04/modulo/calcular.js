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
    //Entradas da função
    let valor1 = Number (numero1)
    let valor2 = Number(numero2)
    resultado = false
    let operadorMatematico = String(operador).toUpperCase()

    //Condicionais para validar qual é o tipo de operação matemática
    /**A ausencia da {} na condicional é porque qualquer condicional que tenha
     * apenas uma linha de processamento a {} torna-se opcional*/
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2
   

    switch (operadorMatematico) {
        case 'SOMAR': //if
            resultado = valor1 + valor2
            break;
    
        case 'SUBTRAIR': //esle if
            resultado = valor1 - valor2
            break;

        case 'MULTIPLICAR': //else if
            resultado = valor1 * valor2
            break;

        case 'DIVIDIR': //else if
            resultado = valor1 / valor2
            break;
    }

    return resultado
}

console.log(calcular(100, 50, 'multiplicar'))