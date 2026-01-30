/********************************************** 
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Daniele Silva Santos
 * Versão: 1.0
**********************************************/

/*
Existem 3 formas de criação de variáveis:

    var -> Permite a criação de um espaço na memória do tipo variável.
    Recomendação: Caso queira utilizar, recomenda-se na criação de variáveis globais
    (inicio de código)

    let -> Permite a criação de espaço na memória do tipo variável. 
    A utilização deste padrão é para a criação dentro de blocos de programação { }.
    Essa varável nasce e morre dentro deste bloco.
    Não é recomendado a sua utilização em escopo global.

    const -> Permite a criação de espaço na memória onde não sofrerá alteraçõ
    durante o código. A "const" pode ser utulizada dentro e fora de bloco { }.
    Dica: Caso você queira diferenciar uma "const", um "var" ou um "let"
    a "const" você pode criar com letras MAIÚSCULAS

 */

    //Importe da biblioteca
    const readline = require('readline')

    //Cria o objeto para entrada de dados
    const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    entradaDeDados.question('Digite o nome do Aluno:', function(nome){
        //Recebe o nome do Aluno que foi digitado
        let nomeAluno = nome

        //Recebe as notas do Aluno
        entradaDeDados.question('Digite a nota 1:', function(valor1){
            let nota1 = valor1
            entradaDeDados.question('Digite a nota 2:', function(valor2){
                let nota2 = valor2
                entradaDeDados.question('Digite a nota 3:', function(valor3){
                    let nota3 = valor3
                    entradaDeDados.question('Digite a nota 4:', function(valor4){
                        let nota4 = valor4

                        /* Operadores de Comparação:
                        (==) -> Permite comparar a igualdade de dois conteúdos

                        (<) -> Permite comparar valores menores

                        (>) -> Permite comparar valores maiores

                        (>=) -> Permite comparar valores maiores ou iguais

                        (<=) -> Permite comparar valores menores ou iguais

                        (!=) -> Permite comparar a diferença entre 
                        
                        (===) -> Permite comparar a igualdade de conteúdos
                                    e a igualdade da tipagem de dados

                        (!==) -> Permite comparar a diferença de conteúdos 
                                    e a igualdade de dados

                        (==!) -> Permite comparar a igualdade de onteúdos
                                    e a difeença de tipos de dados

                        (!=!) -> Permite comparar a diferença de conteúdos 
                                    e a diferença de tipos de dados

                        Operadores Lógicos:
                        E -> AND && ->
                        OU -> OR -> ||
                        NÃO -> NOT -> !
                        */

                        //Validação de entrada vazia
                        if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                            console.log('ERRO: É obrigatório o preenchimento de todos os dados!!')

                        }else if(nota1 >= '101' || nota1 < '0' || nota2 < '0' || nota2 >= '101' || nota3 >= '101' || nota < '0'|| nota4 < '0' || nota4 > '100'){
                            console.log('As notas não podem ser maiores ou menores que a média: 0 ou 100')

                        }else{
                            //Calcular a média
                        }

                    })//Fechamento da nota4

                })//Fechamento da nota3

            })//Fechamento da nota2
            
        })//Fechamento da nota1

    })//Fechamento do nome do Aluno