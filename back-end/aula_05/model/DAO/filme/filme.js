/**********************************************************************************
 * Obejtivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela Filme
 * Data: 15/04/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 **********************************************************************************/

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