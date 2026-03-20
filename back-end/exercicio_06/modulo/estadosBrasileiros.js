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
    
const getDadosEstado = function (uf) {
    let resultado

    listaDeEstados.estados.forEach(function(descricao) {
        if (descricao.sigla === uf) {
            resultado = {
                uf: descricao.sigla,
                descricao: descricao.nome,
                capital: descricao.capital,
                regiao: descricao.regiao

            }//Fechamento do JSON

        }//Fechamento do if

    })
    return resultado
}

const getCapitalEstado = function (uf) {
    let info 

    listaDeEstados.estados.forEach(function(result) {
        if (result.sigla === uf) {
            info = {
                uf: result.sigla,
                descricao: result.nome,
                capital: result.capital
            }
        }
    })
    return info
}

//console.log(getDadosEstado('MT'))
//console.log(getCapitalEstado('RN'))