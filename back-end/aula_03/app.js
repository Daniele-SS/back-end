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

                    //let percentual = Number(taxaCompra) / 100
                    //let montante = Number(capitalProduto) * ((1+Number(taxaCompra)) ** Number(tempoPagamento))
                    let montante = calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                        //toFixed serve para filtrar a quantidade de números após a vírgula
                        console.log('O montante final é: ' + montante.toFixed(2))
                        entradaDeDados.close()
                    }else{
                        console.log('ERRO: Devido a problemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close()
                    }

                })//Fechamaneto tempoPagamento

            })//Fechamaneto taxaCompra

        })//Fechamaneto capitalProduto

    })//Fechamaneto nomeProduto

})//Fechamaneto nomeCliente

/*Criando uma função para calcular o Valor da compra parcelada
Metodo tradicional de criar uma função*/
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    /*Recebe os argumentos da função em variáveis locais
    As variaveis (valor, taxa e tempo) são númericas por conta da conversão
    Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda serão Strings)*/
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)

    //Validação para entradas vazias ou caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')    
        return false
        }else{
            //Chama a função para converter o número em percentual
            let percentual = calcularPercentual(taxa)

        //Validação para o erro do percentual na função calcularPercentual()
        //Irá validar se o conteudo fornecido é um número, caso não seja, irá retornar false
        if(percentual){
            let montante = valor * ((1+percentual) ** tempo)
            return Number (montante.toFixed(2))
        }else{
            console.log('ERRO: Valor da taxa está incorreto.')
            return false
        }
    }//Fechamento do if valorCompra

}//Fechamento da função calcularJurosCompostos

//Calcula o percentual de um número
function calcularPercentual(numero){
    let numeroPercentual = Number(numero)
    

    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false//Não pode processar
    }else{
        //Processamento do calculo percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }
}//Fechamento da função calcularPercentual