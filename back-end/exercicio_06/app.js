/************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ************************************************************************************/

/**
 *  *   Instalação do EXPRESS - npm install express --save
 *        Dependência responsável pela utilização do protocolo HTTP para criar uma API
 * 
 * 
 *      Instalação do CORS - npm install cors --save
 *        Depedência resposável pelas configurações a serem realizadas para a permissão de acesso da API
 */

//Import das depedências para criar a API
const express   = require ('express')
const cors      = require ('cors')

const app = express() //Criando um objeto para manipular o express

//Conjunto de permissões a serem aplicadas no cors da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou um asterisco '*' (que significa todos)
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do cors
}

app.use(cors(corsOptions)) //Configura as permissões da API através do cors


//Response -> Retornos da API
//Request -> Chgedas de dados na API

//Import do arquivo de funções
const estadosCidades = require ('./modulo/functions')

//Retorna dados dos estados filtrando pelo UF
app.get('/v1/senai/dados/estado/:uf', function(request, response){

    let sigla   = request.params.uf
    let estado  = estadosCidades.getDadosEstado(sigla)

    if(estado) {
    response.status(200)
    response.json(estado)
    } else {
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado!"})
    }
})


//Retorna dados da capital de cada estado filtrando pelo UF
app.get('/v1/senai/capital/estado/:uf', function(request, response) {
    let sigla           = request.params.uf
    let capitalEstado   = estadosCidades.getCapitalEstado(sigla)

    if(capitalEstado) {
        response.status(200)
        response.json(capitalEstado)

    } else {
        response.status(404)
        response.json({"message": "ERROR: Estado fornecido não existe!"})
    }

})


//Retorna dados dos estados filtrando pela região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){
    let regiao          = request.params.regiao
    let regiaoEstado    = estadosCidades.getEstadosRegiao(regiao)

    if(regiaoEstado) {
        response.status(200)
        response.json(regiaoEstado)

    } else {
        response.status(404)
        response.json({"message": "ERROR: A região fornecida é inválida!"})
    }
})


//Retorna dados dos estados que foram capitais do Brasil
app.get('/v1/senai/estados/capital/brasil', function (request, response){
    let siglaCapital    = request.params
    let capitais        = estadosCidades.getCapitalPais(siglaCapital)

    response.status(200)
    response.json(capitais)
})


//Retorna dados da cidades filtrando pela UF
app.get('/v1/senai/estados/cidade/:uf', function(request, response){
    let cidade      = request.params.uf
    let cidadesBr   = estadosCidades.getCidades(cidade)

    if(cidadesBr) {
        response.status(200)
        response.json(cidadesBr)

    } else {
        response.status(404)
        response.json({"message": "ERROR: Estado fornecido não existe!"})
    }
})


//Retorna dados das cidades filtrando pela UF
app.get('/v1/senai/estados', function(request, response) {

    let estados = estadosCidades.getListaDeEstados() //Chama a função que retorna a lista de estados

    response.status(200)
    response.json(estados)
})
 
//Serve para inicializar a API para receber requisições (8080 é minha porta para receber a requisição)
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
})