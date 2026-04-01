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


//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response) {

    let estados = estadosCidades.getListaDeEstados() //Chama a função que retorna a lista de estados

    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){

    let sigla   = request.params.uf
    let estado  = estadosCidades.getDadosEstado(sigla)

    response.json(estado)
    response.status(200)
})


app.get('/cidades', function(request, response){
    response.json({"message": "Testando minha API de Cidades"})
    response.status(200)
})

 
//Serve para inicializar a API para receber requisições (8080 é minha porta para receber a requisição)
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
})