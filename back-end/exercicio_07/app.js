/************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de WhatsApp
 * Data: 08/04/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 ************************************************************************************/

//Import das depedências para criar a API
const express   = require ('express')
const cors      = require ('cors')

const app = express() //Criando um objeto para manipular o express

//Conjunto de permissões a serem aplicadas no cors da API
const corsOptions = {
    origin: ['*'], 
    methods: 'GET', 
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do cors
}

app.use(cors(corsOptions)) //Configura as permissões da API através do cors