/****************************************************************************
 * Objetivos: Criar um sistema que faça o cálculo do IMC de uma pessoa.
 * Data: 27/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ****************************************************************************/

//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a sua altura: ', function(altura){
    let alturaDoUsuario = altura
})

entradaDeDados.question('Digite o seu peso: ', function(peso){
    let pesoDoUsuario = peso
})

function calcularImcDoUsuario(altura, peso){
    let alturaDoUsuario = altura
    let pesoDoUsuario = peso

    Number(altura * altura) / Number(pesoDoUsuario)
}

module.exports = {
    calcularImcDoUsuario
}