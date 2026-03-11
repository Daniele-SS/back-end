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
const listaDeNomes          = ['José', 'Maria', 'João', 'André', 'Ana']//Consigo guardar tipos de dados diferentes dentro de um array
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

    listaDeFornecedores.splice(2,2)//O .splice(indicie, qtde de elementos) permite remover um elemento baseado no indice da lista
    console.table(listaDeFornecedores)

}

manipularDados()