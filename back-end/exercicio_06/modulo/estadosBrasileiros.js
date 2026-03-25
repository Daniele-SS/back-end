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

const getEstadosRegiao = function (reg) {
    let aux = []/*A variável vira um array porque uma região tem vários estados. 
                Será preciso percorrer o array para localizar a região e seus estados */

    listaDeEstados.estados.forEach(function(estado) {
        if (estado.regiao === reg) {
            aux.push({//O .push() é usado para poder 'puxar' todos os estados da região selecionada
                uf: estado.sigla,
                descricao: estado.nome
            })
        }
    })
    return {
        regiao: reg,
        estados: aux
    }
}

const getCapitalPais = function () {
    let capitais = []

    listaDeEstados.estados.forEach(function(capitalBr) {
        if (capitalBr.capital_pais) {
            capitais.push({
                uf: capitalBr.sigla,
                descricao: capitalBr.nome,
                capital: capitalBr.capital,
                regiao: capitalBr.regiao,
                capital_pais_ano_inicio: capitalBr.capital_pais.ano_inicio,
                capital_pais_ano_termino: capitalBr.capital_pais.ano_fim,
                capital_atual: capitalBr.capital_pais.capital
            })
        }
    })

    return capitais
}

//console.log(getDadosEstado('MT'))
//console.log(getCapitalEstado('RN'))
// console.log(getEstadosRegiao('Nordeste'))
console.log(getCapitalPais())