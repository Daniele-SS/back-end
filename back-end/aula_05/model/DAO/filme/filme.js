/**********************************************************************************
 * Obejtivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela Filme
 * Data: 15/04/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Cria a conexão com o banco de dados MySql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de filme
const insertFilme = async function(filme) {
    let sql = `insert into tbl_filme (
						nome, 
                        data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa
                        ) 
				values (
						'${filme.nome}', 
						'${filme.data_lancamento}', 
						'${filme.duracao}', 
						'${filme.sinopse}',
						'${filme.avaliacao}',
						'${filme.valor}',
						'${filme.capa}'
						);`

    let result = await knexConex.raw(sql) //Executa o ScriptSql no banco de dados

    if(result) {
        return true
    } else {
        return false
    }
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme) {
    
}


const selectAllFilme = async function() {
    
}

//Função que irá retornar os dados de um filme pela primary key
const selectByIdFilme = async function(id) {
    
}

const deleteFilme = async function(id) {

}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}