/*****************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e 
 *      manipulação de dados para o CRUD de nacionalidade
 * Data: 29/05/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *****************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD de nacionalidade no banco de dados
const nacionalidadeDAO = require('../../model/DAO/nacionalidade/nacionalidade.js')



//Função para inserir uma nova nacionalidade
const inserirNovaNacionalidade = async function(nacionalidade, contentType){
   
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try {

        //Validação para o tipo de dados da requisição (somente JSON)
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Validação de dados para os atributos do Filme (Status 400)
            let validar = await validarDados(nacionalidade)

            //Se a função validar retornar um Json de erro, iremos devolver ao 
            // APP o erro
            if(validar){
                return validar //400
            }else{
                //Encaminha os dados de nacionalidade para o DAO
                let result = await nacionalidadeDAO.insertNacionalidade(nacionalidade)

                if(result){ //201
        
                    nacionalidade.id = result // o ID gerado após o insert

                    message.DEFAULT_MESSAGE.status      = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message     = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response    = nacionalidade
                }else{ //500
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                }
                return message.DEFAULT_MESSAGE
            }
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}


const validarDados = async function(nacionalidade) {
    let message = JSON.parse(JSON.stringify(config_message)) 

    if(nacionalidade.nome == undefined || nacionalidade.nome == '' || nacionalidade.nome == null || nacionalidade.nome.length > 100) {
        message.ERROR_BAD_REQUEST.field = '[NACIONALIDADE] INVÁLIDA'
        return message.ERROR_BAD_REQUEST //400
    } else {
        return false
    }
}

module.exports = {
    inserirNovaNacionalidade
}