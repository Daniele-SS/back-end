/*********************************************************************************************
 * Objetivos: Arquivo resposável por criar um sistema que faça o cálculo do IMC de uma pessoa.
 * Data: 27/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *********************************************************************************************/

function calcularImcDoUsuario(altura, peso){
     let resultado = ''
     const imcModulo = Number(peso) / Number(altura * altura)

    if (imcModulo < 18.5) {
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está abaixo do peso!`)

    }else if (imcModulo >= 18.5 && imcModulo <= 24.9) {
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está com o peso normal.`)

    }else if(imcModulo >= 25 && imcModulo <= 29.9){
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está acima do peso (sobrepeso).`)

    }else if (imcModulo >= 30 && imcModulo <= 34.9) {
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está com Obesidade I!`)

    }else if (imcModulo >= 35 && imcModulo <= 39.9) {
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está com Obesidade II!`)

    }else if (imcModulo >= 40) {
         console.log(`Seu IMC é ${imcModulo.toFixed(2)}, você está com Obesidade III!`)
    }

    return resultado
}

module.exports = {
    calcularImcDoUsuario
}