/*****************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e 
 *      manipulação de dados para o CRUD de filmes
 * Data: 29/05/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *****************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const nacionalidadeDAO = require('../../model/DAO/nacionalidade/nacionalidade.js')