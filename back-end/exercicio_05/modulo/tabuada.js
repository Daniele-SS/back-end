/**********************************************************************************************************
 * Objetivos: Arquivo resposável por gerenciar o cálculo de uma tabuada
 * Data: 05/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************************************/

function gerarTabuada (tabuadaInical, tabuadaFinal, numeroInicial, numeroFinal) {
    //Esse primeiro while irá definir quantos multiplicandos a tabuada terá
    while (tabuadaInical <= tabuadaFinal) {

        //É a minha variável que receberá o número (multiplicador) inicial
        let auxiliar = numeroInicial

        //Esse segundo while irá definir quantos multiplicadores a tabuada terá
        while (auxiliar <= numeroFinal) {

            //Essa é a minha variável que recebe o calculo da multiplicação
            let resultado = auxiliar * tabuadaInical

            //Irá mostrar o resultado no terminal
            console.log(`${tabuadaInical} x ${auxiliar} = ${resultado}`)

            //Inclementa o "número" inicial
            auxiliar++

        }//Fechamento do primeiro while
        tabuadaInical++

    }//Fechamento do segundo while
 
}

gerarTabuada(5, 5, 1, 10)