/**********************************************************************************************************
 * Objetivos: Arquivo resposável por gerenciar números pares e ímpares
 * Data: 08/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************************************/

function listaDeNumeros(numComeco,numFim,opcao){
    let numeroComeco = Number(numComeco)
    let numeroFim    = Number(numFim)
    let resultado

    //inicializando as variavel pra evitar erro na hora do ++
    let quant = 0

    //laço que vai contar do numero inicial ate o ultimo
    for(numeroComeco; numComeco <= numeroFim; numComeco++){

        // responsavel por pegar o resto dda divisao se for 1 é impar e se for zero é par 
        resultado = numComeco%2

        //caso 1 imprime os par e caso 2 os impares
        switch(opcao){
            case '1' :
                if(resultado == 0){
                    console.log(numComeco)
                    quant++
                }
                break;
                
            case '2' :
                if(resultado == 1){
                    console.log(numComeco)
                    quant++
                }
                break;
        }
    }
    console.log("Qtde de números encontrados: "+quant)
} 

module.exports = {
    listaDeNumeros
}