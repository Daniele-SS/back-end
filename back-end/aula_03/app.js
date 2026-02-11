/***********************************************************
 * Objetivo: Criar um sistema que permite o cálculo de juros 
 * utilizando boas práticas com funções
 * Autora: Daniele Silva Santos
 * Data: 11/02/2026
 * Versão: 1.0
 ***********************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do cliente
entradaDeDados.question('Digite o nome do Cliente: ', function(nome){
    let nomeCliente = nome

    //Entrada do nome do produto
    entradaDeDados.question('Digite o nome do Produto: ', function(produto){
        let nomeProduto = produto

        //Entrada do valor da compra
        entradaDeDados.question('Digite o valor da compra: ', function(capital){
            let capitalProduto = capital

            //Entrada do valor da taxa que será aplicada na compra
            entradaDeDados.question('Digite a taxa de juros a ser aplicada na compra: ', function(taxa){
                let taxaCompra = taxa

                //Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo

                    //Import da biblioteca que realiza calculos financeiros
                    let calculos = require('./modulo/calculos')

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                        //toFixed serve para filtrar a quantidade de números após a vírgula
                        console.log('O montante final é: ' + montante.toFixed(2))
                        entradaDeDados.close()
                    }else{
                        console.log('ERRO: Devido a problemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close()
                    }

                })//Fechamamento tempoPagamento

            })//Fechamamento taxaCompra

        })//Fechamamento capitalProduto

    })//Fechamamento nomeProduto

})//Fechamamento nomeCliente