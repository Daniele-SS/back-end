/********************************************************************************************
 * Objetivo: A empresa "Cálculos SA" é uma escola especializada em treinamentos corporativos 
 * para empresas de todos os ramos de atividades, e precisa que você desenvolva uma aplicação 
 * que possa realizar cálculos matemáticos.
 * Autora: Daniele Silva Santos
 * Data: 13/02/2027
 * Versão: 1.0
 ********************************************************************************************/

//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite dois números para podermos realizar os Cálculos Matemáticos: ', function(numero){
    let numeroDigitado = numero

    if(numero == '' || isNaN(numero)){
        console.log('ERRO: É necessário digitar todos os dados solicitados.')
        entradaDeDados.close()
    }

    entradaDeDados.question('Digite qual Operação Matemática você deseja realizar: ', function(operacao){
        let operacaoMatematica = operacao

        if(operacaoMatematica == '' || !isNaN(operacaoMatematica)){
            console.log('ERRO: É necessário informar a Operação matemática que será executada.')
        }
    })










})