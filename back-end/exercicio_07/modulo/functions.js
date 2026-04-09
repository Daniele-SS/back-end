/**************************************************************
 * Objetivo: Obter uma lista de contatos para a criação da API
 * Autora: Daniele Silva Santos
 * Data: 08/04/2026
 * Versão: 1.0
 **************************************************************/

const listaDeContatos = require ('./contatos.js')

const getDados = function() {
    return listaDeContatos.contatos['whats-users']
}

function getContaProfile() {
    let nicknameDosUsuarios = []

    listaDeContatos.contatos['whats-users'].forEach (function(dadoUsuario){
        nicknameDosUsuarios.push({
        nome: dadoUsuario.account,
        nick: dadoUsuario.nick,
        dataCriacao: dadoUsuario['created-since'],
        imagem: dadoUsuario['profile-image'],
        numero: dadoUsuario.number,
        cor: dadoUsuario.background,
        contatos: dadoUsuario.contacts
        })
    })

    return nicknameDosUsuarios
}

// console.log(getContaProfile())




//getContaProfile()

module.exports = { 
    getDados,
    getContaProfile
}
