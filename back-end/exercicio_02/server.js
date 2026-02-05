/*************************************
* Objetivo: Calcular os juros compostos
* 
* Data: 04/02/2026
* Autor: Daniele Silva Santos
* Versão 1.0
*************************************/


//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Nome do cliente
entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome

    //Nome do produto
    entradaDeDados.question('Digite o nome do produto que você quer: ', function(produto){
        let nomeProduto = produto

        //Valor da compra
        entradaDeDados.question('Digite o valor da compra: ', function(compra){
            let ValorCompra = compra

            //Taxa de juros
            entradaDeDados.question('Digite a taxa de juros: ', function(juros){
                let valorJuros = juros

                //Tempo de pagamento
                entradaDeDados.question('Digite o tempo de pagamento: ', function(pagamento){
                    let tempoPagamento = pagamento

                    //Calculo dos juros compostos 
                    let dividindoJuros = (valorJuros/100) 
                    let calcularJuros = (Number(ValorCompra) * (Number(1 + dividindoJuros)) ** Number(tempoPagamento) )
                    let jurosCalculado = (Number(calcularJuros) - Number(ValorCompra))
                    
                    //Fazendo o comprovante de pagamento 
                    console.log(`*****************Viva Moda***************** 
                    \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                    \nA compra do produto ${nomeProduto}, tem um valor de: ${ValorCompra}.
                    \nA sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${calcularJuros.toFixed(3)}.
                    \nO acréscimo realizado ao valor de: ${ValorCompra} será de ${jurosCalculado.toFixed(3)}.
                    \nMuito obrigado por escolher a Viva Moda.
                    \n*******************************************`)
                })
            })
        })
    })
})