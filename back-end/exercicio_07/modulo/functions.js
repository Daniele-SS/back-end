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

    listaDeContatos.contatos['whats-users'].forEach(function(dadosDoUsuario){
        nicknameDosUsuarios.push({
        id: dadosDoUsuario.id,
        nome: dadosDoUsuario.account,
        nick: dadosDoUsuario.nickname,
        dataCriacao: dadosDoUsuario['created-since'],
        imagem: dadosDoUsuario['profile-image'],
        numero: dadosDoUsuario.number,
        cor: dadosDoUsuario.background,
        contatos: dadosDoUsuario.contacts
        })
    })

    return nicknameDosUsuarios
}

function getContatosPessoais() {
    let contatosPessoais = []

    listaDeContatos.contatos['whats-users'].forEach(function(dadosPessoaisDoUsuario){
        contatosPessoais.push({
            nome: dadosPessoaisDoUsuario.name
        })
    })

    return contatosPessoais
}

// console.log(contatosPessoais(dadosPessoaisDoUsuario))



module.exports = { 
    getDados,
    getContaProfile,
    getContatosPessoais
}
