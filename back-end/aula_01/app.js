//Comentário em linha

/*
Comentário em
bloco
*/ 

//imprime no terminal um conteúdo
console.log ('Testando o print do console')

//Permite criar uma varialvel
var nome = "Daniele"
console.log(nome)

//Formas de concatenar variaveis e texto
console.log('O nome do usuário é: ' + nome)
console.log(`O nome do usuário é: ${nome}`)

//import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saída de dados no termnial
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*Função para retornar o nome digitado no terminal.
O metódo question após a sua digitação chama a sua função "callback"
para entregar o que foi digitado no terminal, através do argumento "nomeUsario"
*/
entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    console.log('O nome do usuário é:' + nomeUsuario)

    //Entrada de dados para o Email
    entradaDeDados.question('Favor digitar o seu email:', function(emailUsuario){
        console.log(`O email informado é: ${emailUsuario}`)
    })
})