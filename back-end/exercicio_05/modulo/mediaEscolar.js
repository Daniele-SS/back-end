/**********************************************************************************************************
 * Objetivos: Arquivo resposável por criar um sistema que gerencie as médias escolares de uma universidade.
 * Data: 27/02/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************************************/

const definirGeneros = (sexoAluno, sexoProfessor) => {
    let relatoAluno
    let relatoProfessor

    if (sexoAluno.toUpperCase() === 'F') {
        relatoAluno = 'A aluna'
    } else {
        relatoAluno = 'O aluno'
    }

    if (sexoProfessor.toUpperCase() === 'F') {
        relatoProfessor = 'Professora'
    } else {
        relatoProfessor = 'Professor'
    }

    // Retornar como um objeto para poder usar titulos.relatoAluno depois
    return { relatoAluno, relatoProfessor }

}//Fechamento da const definirGeneros (Arrow function)

function calcularMedia(dados){
    
    //Cálculo da média simples 
    const media = (Number(dados.n1) + Number(dados.n2) + Number(dados.n3) + Number(dados.n4)) / 4
    
    //Como os gêneros serão mostrados no relatório
    const titulos = definirGeneros(dados.sexoA, dados.sexoP)

    //Lógica para saber se o aluno está aprovado, reprovado ou em exame
    let status
    if (media >= 70) {
        status = 'aprovado' // Média acima de 70 
    } else if (media < 50) {
        status = 'reprovado' // Média abaixo de 50 
    } else {
        status = 'em exame' // Média entre 50 e 69 
    }

    //Caso o aluno fique em exame será feito um novo cálculo para decedir a aprovação dele ou não
    let mediaFinalExame = 0
    if (status === 'em exame') {
        // Nota do exame deve vir do objeto dados enviado pelo app.js
        mediaFinalExame = (media + Number(dados.notaExame)) / 2
    
        if (mediaFinalExame >= 60) {
            status = 'aprovado no exame'
        } else {
            status = 'reprovado no exame'
        }
    }

    const relatorio = `
    Relatório do aluno:
    ${titulos.relatoAluno} ${dados.nomeA} foi ${status} na disciplina ${dados.disc}.
    Curso: ${dados.curso}
    ${titulos.relatoProfessor}: ${dados.nomeP}
    Notas do aluno: ${dados.n1}, ${dados.n2}, ${dados.n3}, ${dados.n4}
    Média Final: ${media.toFixed(1)}`

    return relatorio
    
}//Fechamento da function calcularMedia

module.exports = { 
    calcularMedia 
}