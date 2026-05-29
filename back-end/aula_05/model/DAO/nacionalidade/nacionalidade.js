/******************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela
 *           nacionalidade
 * Data: 29/05/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ******************************************************************************/

//Import da biblioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de nacionalidade
const insertNacionalidade = async function(nacionalidade){
    try {
        
        let sql = `insert into tbl_nacionalidade (
								nome
							)
                            values(
							'${nacionalidade.nome}'
							);`

        //Executar o ScriptSQL no banco de dados                        
        let result = await knexConex.raw(sql)
    

        if(result)
            return result[0].insertId //Retorno o ID gerado no BD
        else
            return false

    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertNacionalidade
}