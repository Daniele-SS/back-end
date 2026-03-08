/**********************************************************************************************************
 * Objetivos: Arquivo resposável por gerenciar o cálculo fatorial de um número
 * Data: 08/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************************************/

function calcularFatorial (fatorial) {
    let resultado   = 1
    let numeros     = ''

    for (fatorial; fatorial>0 ; fatorial--){
       
        resultado *= fatorial

        numeros += fatorial 

        if (fatorial > 1) {
            numeros += 'x'
        }
    }
    
    console.log(numeros + '=' + resultado)

    return resultado
}

module.exports = {
    calcularFatorial
}