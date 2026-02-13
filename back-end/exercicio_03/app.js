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
//Entrada do primeiro número que será digitada pelo o usuário
entradaDeDados.question('Digite o Primeiro número que será utilizado para o Cálculo Matemático: ', function(numeroUm){
    let primeiroNumero = numeroUm

    //Irá validar se o campo foi preenchido e se um número foi fornecido
    if(numeroUm == '' || isNaN(numeroUm) || numeroUm <= 0){
        console.log('ERRO: É necessário digitar um número válido para que possamos realizar o Cálculo Matemático e ele não pode ser escrito com letras.')
        entradaDeDados.close()
    }

    //Entrada do segundo número que será digitada pelo o usuário
    entradaDeDados.question('Digite o Segundo número que será utilizado para o Cálculo Matemático: ', function(numeroDois){
        let segundoNumero = numeroDois

        //Irá validar se o campo foi preenchido e se um número foi fornecido
        if(numeroDois == '' || isNaN(numeroDois) || numeroDois <= 0){
            console.log('ERRO: É necessário digitar um número válido para que possamos realizar o Cálculo Matemático e ele não pode ser escrito com letras.')
            entradaDeDados.close()
        }

        //Entrada para que o usuário escolha a operação matemática digitada
        entradaDeDados.question('Qual dessas Operações Matemáticas você deseja realizar? SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO: ', function(operacao){
            let operacaoMatematica = operacao

            if(operacaoMatematica == '' || !isNaN(operacaoMatematica)){
                console.log('ERRO: É necessário informar a Operação matemática que será executada.')
            }
            
            let calculos = require('./modulo/calculoMatematico')

            //O resultado da operação matemática será mostrada ao usuário
            if(calculos){
                //toFixed serve para filtrar a quantidade de números após a vírgula
                console.log('O resultado da Operação Matemática é: ' + montante.toFixed(2))
                entradaDeDados.close()
            }else{
                console.log('ERRO: Devido a problemas no Cálculo Matemático, o programa encerrou.')
                entradaDeDados.close()
            }

        })//Fechamento da operacaoMatematica
    })//Fechamento do segundoNumero
})//Fechamento do primeiroNumero