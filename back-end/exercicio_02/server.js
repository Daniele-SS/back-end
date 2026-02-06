/*************************************
* Objetivo: Calcular os juros compostos
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

    //!isNaN consulta se o conteudo é um número
    if(nomeCliente == '' || !isNaN (nomeCliente) || nomeCliente.length <=2){
        console.log('ERRO: É obrigatório o preenchimento deste dado. Seu nome deve conter ao menos 3 caracteres e ele não pode ser descrito em números!!')
        entradaDeDados.close()
    }

    //Nome do produto
    entradaDeDados.question('Digite o nome do produto que você quer: ', function(produto){
        let nomeProduto = produto

        if(nomeProduto == '' || !isNaN (nomeProduto)){
            console.log('ERRO: É obrigatório o preenchimento deste dado. Ele não pode ser descrito em números!!')
            entradaDeDados.close()
        }

        //Valor da compra
        entradaDeDados.question('Digite o valor da compra: ', function(compra){
            let valorCompra = compra

            if(valorCompra == '' || isNaN (valorCompra)){
                console.log('ERRO: É obrigatório o preenchimento deste dado. O valor da compra deve ser escrito com números!!')
                entradaDeDados.close()
            }

            //Taxa de juros
            entradaDeDados.question('Digite a taxa de juros: ', function(juros){
                let valorJuros = juros

                if(valorJuros == '' || isNaN(valorJuros)){
                    console.log('ERRO: É obrigatório o preenchimento deste dado. Os juros que seram cobrados em sua compra deve ser escrito com números!!')
                    entradaDeDados.close()
                }

                //Tempo de pagamento
                entradaDeDados.question('Digite a quantidade das parcelas: ', function(pagamento){
                    let tempoPagamento = pagamento

                    if(tempoPagamento == '' || isNaN(tempoPagamento)){
                        console.log('ERRO: É obrigatório o preenchimento deste dado. A quantatidade de parcelas deve ser escrita com números!!')
                        entradaDeDados.close()
                    }

                    //Calculo dos juros compostos 
                    let dividindoJuros = (valorJuros/100) 
                    let calcularJuros = (Number(valorCompra) * (Number(1 + dividindoJuros)) ** Number(tempoPagamento) )
                    let jurosCalculado = (Number(calcularJuros) - Number(valorCompra))
                    
                    //Fazendo o comprovante de pagamento 
                    console.log(`*****************Viva Moda***************** 
                    \n Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                    \n A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                    \n A sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${calcularJuros.toFixed(3)}.
                    \n O acréscimo realizado ao valor de: ${valorCompra} será de ${jurosCalculado.toFixed(3)}.
                    \n Muito obrigado por escolher a Viva Moda.
                    \n*******************************************`)

                    entradaDeDados.close()
                })
            })
        })
    })
})