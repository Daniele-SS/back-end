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

    delete aluno.telefone//Comando para excluir um atributo do JSON que neste caso é "telefone"
    console.log(aluno)
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

criandoDadosJSON()