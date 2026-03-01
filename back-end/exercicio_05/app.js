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

//Import da função limpa de entrada de dados
const { entradaDados } = require('./modulo/config.js')

//Import dos módulos de cálculo 
const imcModulo = require('./modulo/imc.js')
const mediaModulo = require('./modulo/mediaEscolar.js')
const tabuadaModulo = require('./modulo/tabuada.js')
const fatorialModulo = require('./modulo/fatorial.js')
const numerosModulo = require('./modulo/numeros.js')

//Import da validação de dados
const validacaoModulo = require('./modulo/validarDados.js')

//Função assíncrona para poder usar o 'await'
const iniciarSistema = async () => {
    
    //Menu de opções 
    console.log('1 - Cálculo de IMC')
    console.log('2 - Cálculo de médias escolares')
    console.log('3 - Cálculo de tabuada')
    console.log('4 - Cálculo de Fatorial')
    console.log('5 - Gerenciar números pares e ímpares')

    //Aqui o sistema para e espera a escolha do usuário
    const escolhaUsuario = await entradaDados('\nEscolha uma opção (1-5): ')

    //Estrutura de decisão
    switch (escolhaUsuario) {
        case '1':
            console.log('\n--- Exercício 01: Cálculo de IMC ---')
            
            const altura = await entradaDados('Digite a sua altura: ')
            const peso = await entradaDados('Digite o seu peso: ')
            
            //Chama a função do módulo e guarda o retorno
            const resultadoImc = imcModulo.calcularImcDoUsuario(altura, peso)
            console.log(resultadoImc)
            break

        case '2':
            console.log('\n--- Exercício 02: Médias Escolares ---')

            const nomeAluno = await entradaDados('Nome do aluno: ')
            const sexoAluno = await entradaDados('Sexo do aluno [F/M]: ')
            const nomeProfessor = await entradaDados('Nome do professor: ')
            const sexoProfessor = await entradaDados('Sexo do professor [F/M]: ') 

            const resultado = mediaEscolar.calcularMedia(dados)
            console.log(resultado)
            break

        case '3':
            // Lógica para Tabuada 
            break;

        case '4':
            // Lógica para Fatorial 
            break;

        case '5':
            // Lógica para Pares e Ímpares
            break

        default:
            console.log('Opção inválida!')
            break
    }

    //Finaliza o processo após a execução
    process.exit(0)
}

//Chama a função para iniciar tudo
iniciarSistema()