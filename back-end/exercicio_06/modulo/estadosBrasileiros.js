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
    let retornoFalso = false //return false da variável caso seja fornecido um estado que não existe

    listaDeEstados.estados.forEach(function(descricao) {
        if (descricao.sigla.toLocaleUpperCase() === uf.toLocaleUpperCase()) {
                resultado = {
                    uf: descricao.sigla,
                    descricao: descricao.nome,
                    capital: descricao.capital,
                    regiao: descricao.regiao

                }//Fechamento do JSON

                retornoFalso = true

        }//Fechamento do if

    })

    if (retornoFalso) {
        return resultado

    } else {
        return false
    }
}

const getCapitalEstado = function (uf) {
    let info 
    let retornoFalso = false

    listaDeEstados.estados.forEach(function(result) {
        if (result.sigla.toUpperCase() === uf.toUpperCase()) {
                info = {
                uf: result.sigla,
                descricao: result.nome,
                capital: result.capital
            }

            retornoFalso = true

        }
    })

    if (retornoFalso) {
        return info

    } else {
        return false
    }
}

const getEstadosRegiao = function (reg) {
    let aux = []/*A variável vira um array porque uma região tem vários estados. 
                Será preciso percorrer o array para localizar a região e seus estados */
    let retornoFalso = false

    listaDeEstados.estados.forEach(function(estado) {
        if (estado.regiao.toUpperCase() === reg.toUpperCase()) {
            aux.push({//O .push() é usado para poder 'puxar' todos os estados da região selecionada
                uf: estado.sigla,
                descricao: estado.nome
            })
        }

        retornoFalso = true
    })

    if (retornoFalso) {
        return {
            regiao: reg,
            estados: aux
        }

    } else {
        return false
    }
}

const getCapitalPais = function () {
    let capitais = []
    let json = {}

    listaDeEstados.estados.forEach(function(capitalBr) {
        if (capitalBr.capital_pais) {
            capitais.push({
                capital_atual: capitalBr.capital_pais.capital,
                uf: capitalBr.sigla,
                descricao: capitalBr.nome,
                capital: capitalBr.capital,
                regiao: capitalBr.regiao,
                capital_pais_ano_inicio: capitalBr.capital_pais.ano_inicio,
                capital_pais_ano_termino: capitalBr.capital_pais.ano_fim
            })
        }
    })

    json.capitais = capitais

    return json
}

const getCidades = function (siglaEstado) {
    let estadoSelecionado = []
    let retornoFalso = false

    listaDeEstados.estados.forEach(function(estado){
        if (estado.sigla === siglaEstado) {
            estadoSelecionado.push({
                uf: estado.sigla,
                descricao: estado.nome,
                quantidade: estado.cidades.length,
                cidades: estado.cidades.map(cidade => cidade.nome)
            })

            retornoFalso = true

        }
    })

    if (retornoFalso) {
        return estadoSelecionado

    } else {
        return false
    }
}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}