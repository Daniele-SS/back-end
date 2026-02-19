/********************************************************************************************
 * Objetivo: A empresa "Cálculos SA" é uma escola especializada em treinamentos corporativos 
 * para empresas de todos os ramos de atividades, e precisa que você desenvolva uma aplicação 
 * que possa realizar cálculos matemáticos.
 * Autora: Daniele Silva Santos
 * Data: 13/02/2026
 * Versão: 1.0
 ********************************************************************************************/

//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada do primeiro número que será digitada pelo usuário
entradaDeDados.question('Digite o Primeiro número que será utilizado para o Cálculo Matemático: ', function(numeroUm){
    let primeiroNumero = parseFloat(numeroUm.replace(',', '.'))

    //Irá validar se o campo foi preenchido e se um número foi fornecido
    if(primeiroNumero == '' || isNaN(primeiroNumero)){
        console.log('ERRO: É necessário digitar um número válido para que possamos realizar o Cálculo Matemático e ele não pode ser escrito com letras.')
        entradaDeDados.close()
    }

    //Entrada do segundo número que será digitada pelo usuário
    entradaDeDados.question('Digite o Segundo número que será utilizado para o Cálculo Matemático: ', function(numeroDois){
        let segundoNumero = parseFloat(numeroDois.replace(',', '.'))

        //Irá validar se o campo foi preenchido e se um número foi fornecido
        if(segundoNumero == '' || isNaN(segundoNumero)){
            console.log('ERRO: É necessário digitar um número válido para que possamos realizar o Cálculo Matemático e ele não pode ser escrito com letras.')
            entradaDeDados.close()
        }

        //Entrada para que o usuário escolha a operação matemática digitada
        entradaDeDados.question('Qual dessas Operações Matemáticas você deseja realizar? SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR: ', function(operacao){
            let operacaoMatematica = operacao.toLowerCase()

            //Import da biblioteca que realiza calculos matematicos
            let calculoMatematico = require('./modulo/calculoMatematico')

            if(operacaoMatematica == '' || !isNaN(operacaoMatematica)){
                console.log('ERRO: É necessário informar a Operação matemática que será executada.')
                entradaDeDados.close()

            }else if(operacaoMatematica == 'somar'){
                let resultadoSomar = calculoMatematico.somar(primeiroNumero, segundoNumero)
                entradaDeDados.close()

            }else if(operacaoMatematica == 'subtrair'){
                let resultadoSubtrair = calculoMatematico.subtrair(numeroUm, numeroDois)
                entradaDeDados.close()

            }else if(operacaoMatematica == 'multiplicar'){
                let resultadoMultiplicar = calculoMatematico.multiplicar(numeroUm, numeroDois)
                entradaDeDados.close()

            }else if(operacaoMatematica == 'dividir'){
                let resultadoDividir = calculoMatematico.dividir(numeroUm, numeroDois)
                 entradaDeDados.close()
            }
            else{
                console.log('ERRO: Devido a problemas no Cálculo Matemático, o programa encerrou.')
                entradaDeDados.close()
            }
            
        })//Fechamento da operacaoMatematica
    })//Fechamento do segundoNumero
})//Fechamento do primeiroNumero