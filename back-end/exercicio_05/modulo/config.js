//Importa o módulo nativo do Node para leitura do terminal
const readline = require('readline')

//Função que transforma o question em uma Promessa (Promise)
//Isso permite usar o 'await' no app.js, deixando o código reto e limpo
const entradaDados = (pergunta) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            rl.close()//Fecha a interface após a resposta
            resolve(resposta)//Retorna o que o usuário digitou
        })
    })
}

//Import para usar em todos os exercícios
module.exports = { 
    entradaDados 
}