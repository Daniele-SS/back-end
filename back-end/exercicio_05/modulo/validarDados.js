/*********************************************************************************************
 * Objetivos: Arquivo resposável por validar os dados
 * Data: 11/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *********************************************************************************************/

function validarImcDoUsuario(validarAltura, validaraPeso) {
    let altura  = validarAltura
    let peso    = validaraPeso

    if (altura == '' || isNaN(altura) || peso == '' || isNaN(peso)) {
        return false
    } else {
        return true
    }
}//Função para validação do calculo de imc

function valirMediasEscolares() {
    
}

function validarTabuada(tabuadaInical, tabuadaFinal, numeroInicial, numeroFinal) {
    let tabInicial  = tabuadaInical
    let tabFinal    = tabuadaFinal
    let numInicio   = numeroInicial
    let numFinal    = numeroFinal

    if (tabFinal <= 1 || tabInicial > 100 || tabInicial == '' || !isNaN(tabInicial) 
        || tabFinal <= 0 || tabFinal > 100 || tabFinal == '' || !isNaN(tabFinal) || tabFinal <  tabInicial
        || numInicio == '' || numInicio < 1 || numInicio > 50 || !isNaN(numInicio) || numFinal < numFinal) {
        return false
    } else {
        return true
    }
}

function validarFatorial(fatorial) {
    let numeroFatorial = fatorial

    if (numeroFatorial == '' || isNaN(numeroFatorial) || numeroFatorial < 2 || numeroFatorial <= 0) {
        return false
    } else {
        return true
    }

}

module.exports = {
    validarImcDoUsuario,
    valirMediasEscolares,
    validarFatorial,
    validarTabuada
}