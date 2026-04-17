/************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Filmes
 * Data: 17/04/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ************************************************************************************/

//Import das depedências para criar a API
const express   = require ('express')
const cors      = require ('cors')

const app = express() //Criando um objeto para manipular o express

//Conjunto de permissões a serem aplicadas no cors da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou um asterisco '*' (que significa todos)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do cors
}

app.use(cors(corsOptions)) //Configura as permissões da API através do cors





app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
})