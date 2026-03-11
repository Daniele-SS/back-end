/*********************************************************************************************
 * Objetivos: Arquivo resposável por validar os dados
 * Data: 11/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *********************************************************************************************/

function validarImcDoUsuario(validarAltura, validaraPeso) {
    let altura = validarAltura
    let peso = validaraPeso

    if (altura == '' || isNaN(altura) || peso == '' || isNaN(peso)) {
        return false
    } else {
        return true
    }
}//Função para validação do calculo de imc

function valirMediasEscolares(params) {
    
}









module.exports = {
    validarImcDoUsuario,
    valirMediasEscolares
}