// modulo/config.js
const readline = require('readline')

const entradaDados = (pergunta) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            rl.close()
            resolve(resposta)
        })
    })
}

//Import para usar em todos os exercícios
module.exports = { 
    entradaDados 
}