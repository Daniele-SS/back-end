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
        nome: dadosDoUsuario.account,
        nick: dadosDoUsuario.nickname,
        dataCriacao: dadosDoUsuario['created-since'],
        imagem: dadosDoUsuario['profile-image'],
        numero: dadosDoUsuario.number,
        cor: dadosDoUsuario.background
        })
    })

    return nicknameDosUsuarios
}

function getContatosPessoais() {
    let contatosPessoais = []

    listaDeContatos.contatos['whats-users'].forEach(function(dadosPessoaisDoUsuario){
        contatosPessoais.push({
            usuarios: dadosPessoaisDoUsuario.contacts
        })
    })

    return contatosPessoais
}





module.exports = { 
    getDados,
    getContaProfile,
    getContatosPessoais
}
