/*****************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autora: Daniele Silva Santos
 * Versão: 1.0
 *****************************************************/

/*
    [] -> Representa um objeto do tipo ARRAY
    {} -> Representa um objeto do tipo JSON

    Array -> É um objeto na mémoria qe permite trabalhar com vários valores em um único objeto.

    let nome    = 'José'
    let nome2   = 'Maria'
    let nome3   = 'João'

             indice   0       1       2    
    let nome    = ['José', 'Maria', 'João']

    
    JSON -> É um objeto na mémoria que permite trabalhar com CHAVE E VALOR.

    let nome        = 'José'
    let telefone    = '123456789'
    let email       = 'jose@gmail.com'

    let cliente = {
        'nome': 'José'
        'telefone': '123456789'
        'email': 'jose@gmail.com'
    }
 */

//Formas de criar um ARRAY
const listaDeNomes          = ['José', 
                                'Maria', 
                                'João', 
                                'André', 
                                'Ana', 
                                'Carlos', 
                                'Bruna', 
                                'Jake',
                                'José da Silva',
                                'José']//Consigo guardar tipos de dados diferentes dentro de um array
const listaDeClientes       = []
const listaDeFornecedores   = []

const exebirDados = function(){
    
    console.log(listaDeNomes)//Exibe o objeto array e seu conteúdo
    
    console.table(listaDeNomes)//Exibe o objeto array em formato de tabela com seus indices

    console.log(listaDeNomes[2])//Exibe apenas o valor do respectivo indice do array

    console.log(typeof(listaDeNomes[0]))//Retorna o tipo de dados de um indice do array

    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)


    //Estruturas de repetição
    console.log('\n--- WHILE ---')
    let cont = 0
    while(cont < listaDeNomes.length){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont++
    }

    console.log('\n--- FOR ---')
    for (let contador = 0; contador < listaDeNomes.length; contador++) {
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    } 

    console.log('\n--- FOR EACH ---')//Retorna o conteúdo de cada elemento através de um CALL BACK
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    console.log('\n--- FOR IN ---')//Retorna o indice do elemento, e será preciso colocar dentro do objeto do array
    for(item in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[item]}`)//Ex: listaDeNomes[item]
    }

    console.log('\n--- FOR OF ---')/*Percorre o array e retorna somente o conteúdo de cada indice, 
    sendo muito parecedio com o FOR EACH*/
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }

    console.log(listaDeNomes.length)//O .length mostra a quantidade de dados dentro do array
}

const manipularDados = function(){
    //Adicionando valores novos no array através de indices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4] = 'Ana da Silva'

    console.log(listaDeClientes)

    /*O .push permite adicionar novos valores no array, sempre no final da lista.
        Para adicionar mais de um item basta adicionar a vírgurla para separar.
    */
    listaDeFornecedores.push('Mario da Silva', 'André da Silva', 'Carlos da Silva', 'Zezinho da Silva', 'Huguinho da Silva', 'Luiz da Silva')
    console.table(listaDeFornecedores)


    listaDeFornecedores.unshift('Ana Carolina')// O .unshift permite adicionar novos elementos no array sempre no INICIO da lista
    console.table(listaDeFornecedores)


    listaDeFornecedores.pop()//O .pop() permite remover elementos do FINAL da lista
    console.table(listaDeFornecedores)


    listaDeFornecedores.shift()//O .shift() permite remover elementos do INICIO da lista
    console.table(listaDeFornecedores)

    listaDeFornecedores.splice(2,2)//Neste caso, o .splice(indicie, qtde de elementos) permite remover um elemento baseado no indice da lista
    console.table(listaDeFornecedores)

    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    /*Neste caso, o .splice permite adicionar um novo elemento em um determinado lugar do array (indice).
    O indicie 0 significa que não será removido niguém, novo conteúdo.*/
    console.table(listaDeFornecedores)

    listaDeFornecedores[1] = 'Zezinho de Souza'
    console.table(listaDeFornecedores)
}

const removerItem = function(nome) {

    let indice = listaDeNomes.indexOf(nome)/*O .indexOf(variável, que nesse caso é 'nome'),
    retorna o indice de um elemento fazendo a busca pelo valor.
    Se o .indexOf() não encontrar o conteúdo ele devolve -1*/
    
    if (indice != -1) {
            listaDeNomes.splice(indice,1)
            return true
    } else {
            return false
    }

    //--- FOR IN ---
    /*for(indice in listaDeNomes){
        if (listaDeNomes[indice] == nome) {
                listaDeNomes.splice(indice,2)/*O número após a minha variável, que nesse caso é o 'indice' 
                irá remover o nome selecionado que nesse caso é 'Maria e Bruna' mais o próximo elemento da lista.
                O número 2 é a quantidade de itens a serem removidos após o indice
        }
    }*/
}

const verificarItem = function(nome) {
    return listaDeNomes.includes(nome)//Verifica a existencia de um conteúdo dentro de uma linha (true/false)
}

const quantidadeItens = function(nome) {
    let cont = 0

    listaDeNomes.forEach(function(item) {
        if (String(item).toUpperCase() == String(nome).toUpperCase())
            cont += 1
    })

    return cont
}

const criandoDadosJSON = function() {
    let aluno = {   "nome":     "José", 
                    "ra":       123456, 
                    "telefone": "8299135674", 
                    "email":    "jose@gmail.com" }

    //Exibe o objeto JSON completo
    console.log(aluno)
    console.table(aluno)

    console.log(aluno.nome)//variável.objeto (aluno.nome), irá mostrar o atributo do objeto, que neste caso é "nome"
    console.log(aluno.email)//variável.objeto (aluno.email), irá mostrar o atributo do objeto, que neste caso é "email"

    aluno.sexo = 'Masculino'//variável.atributo que ainda não existe, irá adicionar um novo atributo no JSON
    console.log(aluno)

    delete aluno.telefone//Remove um atributo do JSON que neste caso é "telefone"
    console.log(aluno)
}

const cadastroDeProdutos = function() {
    let cores = [
        {"id": 1, "cor": "Branco"},//Indice 0 do meu array de cores
        {"id": 2, "cor": "Preto"},//Indice 1
        {"id": 3, "cor": "Azul"},//Indice 2
        {"id": 4, "cor": "Rosa"},//Indice 3
        {"id": 5, "cor": "Cinza"}//Indice 4, fechamento do JSON
    ]//Fechamento do Array

    let marcas = [
        {"id": 1, "marca": "LG",         "telefone": "123456789",    "email": "lg@gmail.com"},//Indice 0 do array
        {"id": 2, "marca": "Dell",       "telefone": "789456123",    "email": "dell@gmail.com.br"},
        {"id": 3, "marca": "Lenovo",     "telefone": "578913421",     "email": "lenovo@gmail.com.br"},
        {"id": 4, "marca": "Aplle",      "telefone": "741258963",    "email": "aplle@gmail.com"},
        {"id": 5, "marca": "Razer",      "telefone": "369852147",    "email": "razer@gmail.com.br"},
        {"id": 6, "marca": "Logitech",   "telefone": "852369874",   "email": "logitech@gmail.com"},
        {"id": 7, "marca": "Multilaser", "telefone": "827415269",    "email": "multilaser@gmail.com"}//Fechamento do JSON
    ]//Fechamento do Array

    let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca": [
                marcas[1].marca
            ],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],//Fechamento do Array cor
            "valor": 800.50
        },//Fechamento do JSON
        {   "id": 2,
            "nome": "Teclado", 
            "descricao": "Teclado mecânico RGB",
            "marca": [
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },
        {   "id": 3,
            "nome": "Mouse", 
            "descricao": "Sem fio",
            "marca": [
                marcas[1].marca,
                marcas[4].marca,
                marcas[5].marca
            ],
            "qtde": 500,
            "cor": [
                cores[0],
                cores[1],
                cores[4]
            ],
            "valor": 80
        }
    ]//Fechamento do Array

    // console.log(cores)
    // console.table(cores)
    // console.log(cores[2].nome)/*variável[indice do array].objeto do JSON, irá me mostrar o objeto 
    // selecionado do indice "2" que neste caso é "azul"*/

    console.log(produtos)
    // console.log(produtos[0].cor)/*Irá mostrar as cores que estam dentro do meu array "cor" que está dentro do meu JSON
    // da variável let produtos*/
    // console.log(produtos[0].cor[1].cor)/*Navegando dentro de dois JSON e dois arrays.
    // variálvel[indice].variável.[indicie].variável -> Para mostrar o objeto desejado do JSON.*/

    // produtos[0].cor.forEach(function(nomeCor) {
    //     console.log('A cor do produto é: ' + nomeCor.cor)
    // })//Fechamento do FOR EACH

   produtos.forEach(function(itemProduto) {
    console.log(`Produto: ${itemProduto.nome}`)/* Percorre o objeto de produto para trazer os dados de cada produto.
                                                Irá printar no terminal o nome do produto por conta do '.nome' após chamar o meu parametro (variável),
                                                que neste caso é 'itemProduto' */

    itemProduto.marca.forEach(function(itemMarca){/* Começando do primeiro loop '.itemProduto'
                                                    Percorre o objeto de marca dentro de cada produto, para trazer as marcas*/
        console.log(`       Marca: ${itemMarca}`)
    })//Fechamento do loop itemProduto.marca

    itemProduto.cor.forEach(function(itemCor) {//Percorre o objeto de cor dentro de cada produto, para trazer as cores
        console.log(`           Cor: ${itemCor.cor}`)
    })//Fechamento do loop itemProduto.cor
    
   })//Fechamento do loop produtos


   //Pesquisando um produto pelo NOME
   console.log('Pesquisando um produto pelo NOME')
   let nome = 'teclado'
   
   produtos.forEach(function(itemProduto) {//Percorrendo o ARRAY DE PRODUTOS->
    if (String(itemProduto.nome).toLocaleUpperCase() == String(nome).toLocaleUpperCase()) {
        console.log(itemProduto)
    }
   })//Fechamento do loop produtos


   //Pesquisando um produto pela COR
   console.log('Pesquisando um produto pela COR')
   let cor = 'azul'
   let status = false

   produtos.forEach(function(itemProduto) {

    itemProduto.cor.forEach(function(itemCor) {
        if (String(itemCor.cor).toLocaleLowerCase() == String(cor).toLocaleLowerCase()) {
         console.log(itemProduto)/*Irá printar os produtos que possuem a cor 'azul' pois atribui ela a minha variável 'cor'. 
                                    Caso eu coloque a cor 'rosa', será apresentado todos os produtos que possuem essa cor. */
            status = true 

         //console.log(itemProduto.cor)Irá printar somente as cores dos produtos sem falar qual é o produto 
         // que possui a cor atribuida a minha variável 'cor', pois estou usando o .cor
        }

        if (!status) {/*Irá validar se a variável digitada é valida para printar as mensagens no terminal
                        e caso não seja, irá cair nesse console.log */
            console.log('Item pesquisado não foi encontrado...')
        }

    })//Fechamento do forEach de itemProduto.cor

   })//Fechamento do forEach de produtos


}

//exebirDados()
//manipularDados()
//console.table(listaDeNomes)
//manipularDados()
// let resposta = removerItem('blabla')

// if (resposta) 
//      console.log('Item removido com sucesso')
//  else 
//     console.log('Não foram encontrados itens para serem removidos.')

// console.table(listaDeNomes) 

//console.log(verificarItem('Maria'))//Para verificar o que o return irá mostrar no caso do .includes, é nece
//console.log(quantidadeItens('José da Silva'))

//criandoDadosJSON()
cadastroDeProdutos()