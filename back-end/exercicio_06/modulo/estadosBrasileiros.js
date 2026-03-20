/****************************************
 * Objetivo: Obter uma lista de estados
 * Autora: Daniele Silva Santos
 * Data: 18/03/2026
 * Versão: 1.0
 ****************************************/

const listaDeEstados = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estados = []

    listaDeEstados.estados.forEach(function(estado) {
        estados.push(estado.sigla)
    })

    return {
        uf: estados,
        quantidade: estados.length//Retorna a quantidade de estados
    }
}
    
 
console.log(getListaDeEstados())