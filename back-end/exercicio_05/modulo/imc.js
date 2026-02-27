/*********************************************************************************************
 * Objetivos: Arquivo resposável por criar um sistema que faça o cálculo do IMC de uma pessoa.
 * Data: 27/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *********************************************************************************************/

function calcularImcDoUsuario(altura, peso){
    let alturaDoUsuario = 1.66
    let pesoDoUsuario   = 90
    const calculo = Number(pesoDoUsuario) / Number(alturaDoUsuario * alturaDoUsuario)

    if (calculo < 18.5) {
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está abaixo do peso!`)

    }else if (calculo >= 18.5 && calculo <= 24.9) {
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está com o peso normal.`)

    }else if(calculo >= 25 && calculo <= 29.9){
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está acima do peso (sobrepeso).`)

    }else if (calculo >= 30 && calculo <= 34.9) {
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está com Obesidade I!`)

    }else if (calculo >= 35 && calculo <= 39.9) {
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está com Obesidade II!`)

    }else if (calculo >= 40) {
         console.log(`Seu peso é ${calculo.toFixed(2)}, você está com Obesidade III!`)
    }else{
        console.log('merda')
    }
}

calcularImcDoUsuario()

module.exports = {
    calcularImcDoUsuario
}