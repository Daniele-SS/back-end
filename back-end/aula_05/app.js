

//Import das dependencias para criar a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')
const controllerClassificacao = require('./controller/classificacao/controller_classificacao.js')
const controllerGenero = require('./controller/genero/controller_genero.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou *(Todos)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))

//ENDPOINTS

//FILME
//Endpoint para Inserir um Filme
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
   
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Filmes
app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar um Filme pelo ID
app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    //Recebe o ID via parametro
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualiar um Filme pelo ID
app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request, response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar um Filme pelo ID
app.delete('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})


//CLASSIFICACAO
//Endpoint para Inserir um Filme
app.post('/v1/senai/locadora/classificacao', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.inserirNovoClassificacao(dados, contentType)
   
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Filmes
app.get('/v1/senai/locadora/classificacao', async function(request, response){
    let result = await controllerClassificacao.listarClassificacao()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar um Filme pelo ID
app.get('/v1/senai/locadora/classificacao/:id', async function(request, response){
    //Recebe o ID via parametro
    let id = request.params.id

    let result = await controllerClassificacao.buscarClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualiar um Filme pelo ID
app.put('/v1/senai/locadora/classificacao/:id', bodyParserJSON, async function(request, response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerClassificacao.atualizarClassificacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar um Filme pelo ID
app.delete('/v1/senai/locadora/classificacao/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerClassificacao.excluirClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

//GENERO
//Endpoint para Inserir um Filme
app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerGenero.inserirNovoGenero(dados, contentType)
   
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Filmes
app.get('/v1/senai/locadora/genero', async function(request, response){
    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar um Filme pelo ID
app.get('/v1/senai/locadora/genero/:id', async function(request, response){
    //Recebe o ID via parametro
    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualiar um Filme pelo ID
app.put('/v1/senai/locadora/genero/:id', bodyParserJSON, async function(request, response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar um Filme pelo ID
app.delete('/v1/senai/locadora/genero/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})



//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
})