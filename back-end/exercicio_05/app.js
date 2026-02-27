/****************************************************************************
 * Objetivos: 
 * 1. Criar um sistema que faça o cálculo do IMC de uma pessoa.
 * 2. Criar um sistema que gerencie as médias escolares de uma universidade.
 * 3. Criar um sistema para gerenciar o cálculo de uma tabuada.
 * 4. Calcular o Fatorial de um número fornecido pelo usuário.
 * 5. Criar um sistema que gerencie números pares e ímpares
 * Data: 25/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ****************************************************************************/

//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada para da opção de calculos disponíveis no sistema
entradaDeDados.question('1. Calculo de IMC \n2. Calculo de notas escolares \n3. Calculo de uma tabuada \n4. Calculo do fatorial de um número \n5. Gerenciamento de números pares e ímpares \nDigite o número da opção desejada: ', function(escolha){
    let escolhaUsuario = escolha

    let imcDoUsuario = require('./modulo/imc')

    if (escolhaUsuario == '1') {

        entradaDeDados.question('Digite a sua altura: ', function(altura){
            let alturaDoUsuario = altura
    
            entradaDeDados.question('Digite o seu peso: ', function(peso){
                let pesoDoUsuario = peso
     
                let resultadoImc = imcDoUsuario.calcularImcDoUsuario()    
            })
        })
    }//Fechamento do if escolhaUsuario 1

    if (escolhaUsuario == '2') {

        entradaDeDados.question('Digite o nome do(a) anulo(a); ', function(aluno) {
            let nomeAluno = aluno

            entradaDeDados.question('Digite o nome do(a) professor(a): ', function(professor) {
                let nomeProfessor = professor

                entradaDeDados.question('Digite o sexo do(a) professor(a): ', function(sexualidadeDoProfessor) {
                    let sexoDoProfessor = sexualidadeDoProfessor

                    entradaDeDados.question('Digite o sexo do(a) aluno(a): ', function(sexualidadeDoAluno) {
                        let sexoDoProfessor = sexualidadeDoAluno

                        entradaDeDados.question('Digite o nome do curso: ', function(curso) {
                            let nomeCurso = curso

                            entradaDeDados.question('Digite o nome da disciplina: ', function(disciplina) {
                                let nomeDisciplina = disciplina



                            })//Fechamento da entradadeDeDados nomeDisciplina

                        })//Fechamento da entradadeDeDados nomeCurso

                    })//Fechamento da entradadeDeDados sexualidadeDoAluno

                })//Fechamento da entradadeDeDados sexoDoProfessor

            })//Fechamento da entradadeDeDados nomeProfessor

        })//Fechamento da entradadeDeDados nomeAluno

    }//Fechamento do if escolhaUsuario 2
















})//Fechamento da entradaDeDados