/****************************************************************************
 * Objetivos: Criar um sistema que faça o cálculo do IMC de uma pessoa.
 * Data: 27/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ****************************************************************************/

function calcularImcDoUsuario(altura, peso){
    let alturaDoUsuario = altura
    let pesoDoUsuario = peso

    Number(altura * altura) / Number(pesoDoUsuario)
}

module.exports = {
    calcularImcDoUsuario
}