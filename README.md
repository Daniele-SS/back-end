# Aula 01 - Fundamentos e Entrada de Dados

Primeiros passos com Node.js, explorando a saída de dados e a interação com o utilizador via terminal.

## 📝 Conceitos Aprendidos
- **Saída de Dados:** Uso do `console.log` para imprimir conteúdos.
- **Variáveis:** Declaração de variáveis simples com `var`.
- **Concatenação:** - Tradicional: `'Texto' + variavel`
  - Template Strings: `` `Texto ${variable}` ``
- **Biblioteca Readline:** Importação e criação de interface para entrada e saída de dados (`stdin`/`stdout`).
- **Callbacks:** Entendimento de funções de retorno para processar dados digitados.

## 💻 Exemplo de Código
O projeto solicita o nome e o e-mail do utilizador de forma sequencial no terminal.

---
# Aula 02 - Variáveis, Operadores e Condicionais

Desenvolvimento de um sistema de cálculo de médias escolares para praticar lógica de programação.

## 📝 Conceitos Aprendidos
- **Tipos de Variáveis:**
  - `var`: Escopo global (uso em início de código).
  - `let`: Escopo local/bloco `{ }` (nasce e morre no bloco).
  - `const`: Valores constantes (recomendado uso de MAIÚSCULAS).
- **Operadores de Comparação:**
  - `==` (conteúdo) vs `===` (conteúdo e tipo).
  - `!=`, `<`, `>`, `>=`, `<=`.
- **Operadores Lógicos:**
  - `&&` (E), `||` (OU), `!` (NÃO).
- **Validação:** Verificação de campos vazios e limites numéricos (0 a 100).

## ⚙️ Funcionalidade
O sistema recebe o nome do aluno e 4 notas, validando se todos os campos foram preenchidos antes de prosseguir.

---
# Aula 03 - Funções e Modularização

Criação de um sistema de cálculo de juros utilizando boas práticas de organização de código.

## 📝 Conceitos Aprendidos
- **Modularização:** Separação da lógica de negócio em ficheiros distintos (ex: `./modulo/calculos.js`).
- **Funções:** - Declaração de funções tradicionais.
  - Retorno de valores (`return`).
  - Funções públicas via `module.exports`.
- **Tratamento de Dados:** - `Number()` para conversão de tipos.
  - `isNaN()` para validar se a entrada é um número válido.
  - `.toFixed(2)` para formatar casas decimais.

## 📂 Estrutura
O ficheiro principal gere a entrada de dados, enquanto o módulo realiza os cálculos matemáticos de juros compostos e percentuais.

---
# Aula 04 - Estruturas de Dados (Array e JSON)

Estudo sobre manipulação de coleções de dados complexas utilizando objetos e listas.

## 📝 Conceitos Aprendidos
- **Array `[]`:** Objeto em memória para múltiplos valores indexados.
- **JSON `{}`:** Objeto baseado em Chave e Valor.
- **Estruturas de Repetição:**
  - `while`, `for`, `forEach`, `for in` e `for of`.
- **Métodos de Manipulação:**
  - `.push()`, `.unshift()`, `.pop()`, `.shift()`, `.splice()`, `.indexOf()`, `.includes()`.
- **Navegação em Objetos:** Aceder a atributos (`objeto.atributo`) e iterar sobre arrays internos.

## 🛠️ Prática
Implementação de um sistema de inventário onde produtos possuem marcas e múltiplas cores associadas através de JSONs aninhados.

---
# Exercício 05 - Soma de Valores

Exercício prático focado na captura de múltiplos dados e operações aritméticas.

## 📝 Objetivo
Solicitar ao utilizador o seu nome e três números aleatórios, realizando a soma total.

## 💡 Destaques Técnicos
- Uso do `readline` para capturar múltiplas entradas encadeadas.
- Conversão explícita de String para Número com a classe `Number` para evitar erros de concatenação na soma.
- Encerramento da interface com `entradaDeDados.close()`.

---
# Exercício 06 - Sistema Viva Moda (Juros)

Aplicação completa de um sistema de vendas com cálculo de juros compostos e emissão de comprovante.

## 📝 Funcionalidades
- **Validação de Dados:**
  - Nome deve ter mais de 2 caracteres e não ser numérico.
  - Valor da compra deve ser superior a 0 e numérico.
- **Lógica de Pagamento:**
  - Opção de parcelamento em **Meses** ou **Anos**.
  - Conversão automática de anos para meses (`anos * 12`).
- **Cálculo de Juros:** Aplicação da fórmula de juros compostos para determinar o montante final e o valor do acréscimo.

## 📄 Comprovante
O sistema gera um "ticket" visual no terminal com todos os detalhes da transação para o Sr(a) cliente.

---
# Projeto Cálculos SA - Escola de Treinamentos

Este sistema foi desenvolvido para a empresa "Cálculos SA", focando-se em fornecer uma aplicação para cálculos matemáticos corporativos através do terminal.

## 📝 Conceitos Aprendidos
- **Tratamento de Inputs:** Uso de `.replace(',', '.')` para aceitar números no formato brasileiro e convertê-los para o padrão computacional.
- **Normalização de Dados:** Aplicação de `.toLowerCase()` para garantir que a escolha da operação (ex: "SOMAR" ou "somar") seja interpretada corretamente.
- **Validação de Erros:** - Verificação de campos vazios.
  - Uso de `isNaN()` para impedir a entrada de letras em campos numéricos.
  - Encerramento seguro da interface com `entradaDeDados.close()`.
- **Modularização:** Separação da lógica de cálculo num ficheiro externo (`calculoMatematico.js`).

## 🚀 Funcionalidades
Realiza as quatro operações básicas: **Soma, Subtração, Multiplicação e Divisão**, com validação específica para evitar divisões por zero.

---
# Módulo de Operações Matemáticas

Ficheiro de back-end responsável pelo processamento aritmético das operações solicitadas pelo sistema principal.

## 📝 Detalhes Técnicos
- **Funções Nomeadas:** Implementação de funções claras para `somar`, `subtrair`, `multiplicar` e `dividir`.
- **Segurança na Divisão:** Inclusão de um bloco `if` para validar se o divisor é menor ou igual a zero, emitindo uma mensagem de erro personalizada.
- **Tipagem:** Garantia de que os parâmetros são tratados como números através da classe `Number()`.
- **Exportação de Funções:** Uso do `module.exports` para disponibilizar todas as operações de forma pública para o projeto.

---
# Validação e Processamento de Dados (Versão 2.0)

Este projeto demonstra uma abordagem mais avançada na organização de funções e validação de dados antes da execução de cálculos.

## 📝 Conceitos Aprendidos
- **Funções Anónimas:** Declaração de lógica através de constantes (`const calcular = function`).
- **Lógica de Validação:** Criação de uma função dedicada (`validarDados`) que retorna um Booleano, separando a verificação de erros da execução do cálculo.
- **Estrutura Switch Case:** Substituição de múltiplos `if/else` pela estrutura `switch` para selecionar a operação de forma mais limpa e organizada.
- **Arrow Functions (Funções de Seta):** Implementação de funções de linha única para as operações básicas, tornando o código mais moderno e conciso:
  - `const somar = (n1, n2) => n1 + n2;`

## 🛠️ Métodos Utilizados
- `toUpperCase()`: Para padronizar o operador matemático em letras maiúsculas dentro do `switch`.

---
# Gerador Automático de Tabuada

Aplicação focada na utilização de estruturas de repetição para automação de tarefas matemáticas.

## 📝 Conceitos Aprendidos
- **Estrutura de Repetição `for`:** Implementação de um laço que percorre do número 0 ao 10 para gerar a tabuada completa de forma automática.
- **Consumo de Módulos:** Integração com o ficheiro `calcular.js` para reaproveitar a função de multiplicação.
- **Interpolação de Strings:** Uso de Template Literals (crases) para exibir os resultados de forma legível no terminal:
  - Ex: `` `${tab} x ${cont} = ${resultado}` ``.

## ⚙️ Como Funciona
Basta invocar a função `gerarTabuadaFor(numero)` e o sistema processa toda a lógica de repetição, imprimindo linha a linha o resultado da multiplicação.

---
# Sistema Integrado de Exercícios Lógicos - Node.js

Este projeto é uma aplicação de console que agrupa cinco ferramentas fundamentais de lógica de programação, desenvolvida para consolidar conceitos de funções assíncronas, modularização e validação de dados em ambiente Node.js.

## 🚀 Funcionalidades

O sistema oferece um menu interativo com as seguintes opções:

1.  **Cálculo de IMC:** Calcula o Índice de Massa Corporal e retorna a classificação de saúde (abaixo do peso, peso ideal, obesidade, etc.).
2.  **Médias Escolares:** Gerencia notas de alunos em uma universidade, gerando um relatório detalhado com tratamento de gênero (aluno/aluna, professor/professora) e cálculo de exame final.
3.  **Cálculo de Tabuada:** Gera tabuadas personalizadas permitindo definir o intervalo de multiplicandos (ex: tabuada do 2 ao 5) e o intervalo de multiplicadores (ex: do 1 ao 10).
4.  **Cálculo de Fatorial:** Calcula o fatorial de um número fornecido, exibindo a sequência lógica da operação (ex: 5x4x3x2x1 = 120).
5.  **Números Pares e Ímpares:** Filtra e lista números dentro de um intervalo definido pelo usuário, separando-os entre pares ou ímpares e exibindo a contagem total.

## 📝 Conceitos Técnicos Aplicados

-   **Programação Assíncrona:** Uso de `async/await` e `Promises` para gerenciar a entrada de dados via terminal sem travar a execução.
-   **Modularização (CommonJS):** Organização do código em múltiplos arquivos na pasta `./modulo/` para facilitar a manutenção e escalabilidade.
-   **Encapsulamento de Lógica:** Separação clara entre o arquivo principal (`app.js`), os motores de cálculo (`imc.js`, `tabuada.js`, etc.) e a camada de validação (`validarDados.js`).
-   **Tratamento de Dados:** Validações rigorosas para garantir que entradas vazias, caracteres não numéricos ou intervalos inválidos não quebrem a aplicação.
-   **Estruturas de Repetição:** Uso estratégico de `for` e `while` para geração de sequências matemáticas e tabelas.

## 📂 Estrutura de Arquivos

```text
├── app.js                # Arquivo principal (Menu e fluxo do sistema)
└── modulo/               # Pasta contendo a lógica de negócio
    ├── config.js         # Configuração do Readline com Promises
    ├── imc.js            # Lógica do Cálculo de IMC
    ├── mediaEscolar.js   # Lógica de médias e relatórios
    ├── tabuada.js        # Lógica de geração de tabuadas
    ├── fatorial.js       # Lógica do cálculo fatorial
    ├── numeros.js        # Lógica de filtragem par/ímpar
    └── validarDados.js   # Funções de validação para todos os módulos
```

## 🛠️ Como Executar

1.  Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  Clone o repositório ou baixe os arquivos.
3.  No terminal, navegue até a pasta do projeto.
4.  Execute o comando:

```bash
node app.js
```

---
# API de Estados e Cidades do Brasil - Manipulação de JSON

Este projeto consiste em um módulo Node.js desenvolvido para filtrar, organizar e retornar dados específicos sobre os estados brasileiros, suas capitais, regiões e cidades, utilizando uma base de dados em formato JSON.

## 🚀 Funcionalidades

O módulo exporta diversas funções para manipulação de dados geográficos:

* **getListaDeEstados:** Retorna uma lista contendo apenas as siglas (UF) de todos os estados e a quantidade total encontrada.
* **getDadosEstado(uf):** Retorna informações detalhadas (nome, capital, região) de um estado específico através da sua sigla.
* **getCapitalEstado(uf):** Retorna especificamente a capital de um estado informado.
* **getEstadosRegiao(regiao):** Agrupa e retorna todos os estados pertencentes a uma região específica (Ex: Sul, Nordeste).
* **getCapitalPais:** Retorna dados históricos e atuais sobre as cidades que já foram ou são capitais do Brasil.
* **getCidades(uf):** Lista todas as cidades de um estado específico, incluindo a contagem total de municípios daquela unidade federativa.

## 📝 Conceitos Técnicos Aplicados

-   **Manipulação de Arrays de Objetos:** Uso intensivo de métodos como `.forEach()` para percorrer dados e `.push()` para construir novas coleções.
-   **Tratamento de Strings:** Uso de `.toUpperCase()` e `.toLocaleUpperCase()` para garantir que as buscas funcionem independentemente de o usuário digitar letras maiúsculas ou minúsculas.
-   **Mapeamento de Dados:** Utilização do método `.map()` para extrair propriedades específicas (como nomes de cidades) de dentro de objetos complexos.
-   **Lógica de Filtro:** Implementação de variáveis de controle (flags) para validar se uma informação existe antes de retornar o resultado ou um valor falso.
-   **Estruturas de JSON Dinâmicas:** Construção de objetos JSON personalizados para retorno de APIs.

## 📂 Estrutura de Arquivos

```text
├── main.js               # Arquivo principal para testes das funções
├── estados_cidades.js    # Base de dados (JSON) com as informações do Brasil
└── modulo/               
    └── funcoes.js        # Módulo contendo a lógica de filtragem e exportação
```

## 🛠️ Como Executar

1.  Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  Importe o módulo no seu arquivo principal:

```javascript
const funcoesBrasil = require('./modulo/funcoes.js');
```

3.  Chame qualquer uma das funções, por exemplo:

```javascript
console.log(funcoesBrasil.getCidades('SP'));
```

---
## 👤 Autora 
[Daniele Silva Santos](https://www.linkedin.com/in/danielesilvasantos/)
