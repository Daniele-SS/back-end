var readline = require('readline')

//Cria uma interface para entrada e saída de dados no termnial
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada de dados que solicita o nome do usuário
entradaDeDados.question('Digite o seu nome: ', function(nomeUsuario) {

    //Entrada de dados que solicita ao usuáraio três números aleatórios
    entradaDeDados.question('Digite o primeiro número: ', function(n1) {
        entradaDeDados.question('Digite o segundo número: ', function(n2){
            entradaDeDados.question('Digite o terceiro número: ', function(n3) {

                //Faz a soma dos 3 números que o usuário forneceu
                //A classe Number converte uma String para número
                var soma = Number(n1) + Number(n2) + Number(n3);

                //Mostra a soma do resultado
                console.log(`${nomeUsuario}, o resultado da soma é: ${soma}`)
                
                entradaDeDados.close()
            });//Fechamento do n3

        });//Fechamento do n2

    });//Fechamento do n1

})//Fechamento do nome do usuário