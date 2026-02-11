/*****************************************************************************
 * Objetivo: Arquivo responsável pelas funções de Calculos para este projeto
 * Autora: Daniele Silva Santos
 * Data: 11/02/2026
 * Versão: 1.0
*****************************************************************************/

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

//Tornando as duas funções públicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}