# 📚 Back-End com Node.js

Repositório de estudos e exercícios práticos de back-end com Node.js, desenvolvido durante o curso. Cobre desde os fundamentos da linguagem até a criação de APIs REST com Express.

**Autora:** Daniele Silva Santos  
**Período:** Janeiro – Abril de 2026

---

## 🗂️ Estrutura do Repositório

```
back-end/
├── aula_01/
├── aula_02/
├── aula_03/
├── aula_04/
├── aula_05/          ← Em andamento (introdução a banco de dados)
├── exercicio_01/
├── exercicio_02/
├── exercicio_03/
├── exercicio_04/
├── exercicio_05/
├── exercicio_06/
├── exercicio_07/
└── README.md
```

---

## 🎓 Aulas

### 🖥️ Aula 01 — Fundamentos e Entrada de Dados

Primeiros passos com Node.js: saída de dados no terminal e captura de entrada via `readline`.

**Conceitos abordados:**
- `console.log` para saída de dados
- Declaração de variáveis com `var`
- Concatenação tradicional e com template strings
- Importação da biblioteca `readline` e criação de interface `stdin`/`stdout`
- Callbacks para processar dados digitados pelo usuário

**Funcionamento:** O programa solicita nome e e-mail do usuário de forma sequencial no terminal.

---

### 🔢 Aula 02 — Variáveis, Operadores e Condicionais

Sistema de cálculo de médias escolares para praticar lógica de programação.

**Conceitos abordados:**
- Tipos de variáveis: `var` (escopo global), `let` (escopo de bloco), `const` (valores constantes)
- Operadores de comparação: `==`, `===`, `!=`, `<`, `>`, `>=`, `<=`
- Operadores lógicos: `&&` (E), `||` (OU), `!` (NÃO)
- Validação de campos vazios e limites numéricos (0 a 100)

**Funcionamento:** Recebe nome do aluno e 4 notas, com validação antes de prosseguir.

---

### ⚙️ Aula 03 — Funções e Modularização

Sistema de cálculo de juros compostos com separação de responsabilidades entre arquivos.

**Estrutura:**
```
aula_03/
├── app.js
├── folhaPagto.js
└── modulo/
    └── calculos.js
```

**Conceitos abordados:**
- Modularização com `module.exports` e `require`
- Funções tradicionais com retorno de valores (`return`)
- Conversão de tipos com `Number()` e `isNaN()`
- Formatação de decimais com `.toFixed(2)`

**Funcionamento:** `app.js` gerencia a entrada de dados (cliente, produto, capital, taxa e tempo). `calculos.js` executa o cálculo de juros compostos e percentual.

---

### 📦 Aula 04 — Estruturas de Dados (Array e JSON)

Primeiro contato com coleções de dados complexas. Foco no arquivo `/modulo/array_json.js` — o `app.js` não foi alterado nesta aula.

**Estrutura:**
```
aula_04/
└── modulo/
    └── array_json.js
```

**Conceitos abordados:**
- `Array []`: objeto indexado para múltiplos valores
- `JSON {}`: estrutura de Chave e Valor
- Estruturas de repetição: `while`, `for`, `forEach`, `for in`, `for of`
- Métodos de Array: `.push()`, `.unshift()`, `.pop()`, `.shift()`, `.splice()`, `.indexOf()`, `.includes()`
- Navegação em objetos e arrays aninhados

**Prática:** Sistema de inventário com produtos, marcas e múltiplas cores em JSONs aninhados.

---

### 🎲 Aula 05 — Banco de Dados com Node.js *(em andamento)*

Primeiro contato com banco de dados integrado ao back-end. Estrutura com múltiplas pastas e arquivos ainda em desenvolvimento.

---

## 🛠️ Exercícios

### 📒 Exercício 01 — Soma de Valores

**Objetivo:** Solicitar nome e três números ao usuário, realizando a soma total.

**Destaques técnicos:**
- Entrada de dados encadeada com `readline`
- Conversão explícita de `String` para `Number` para evitar concatenação indevida
- Encerramento da interface com `entradaDeDados.close()`

---

### 📝 Exercício 02 — Sistema Viva Moda (Juros Compostos)

**Objetivo:** Aplicação de vendas com cálculo de juros compostos e emissão de comprovante no terminal.

**Funcionalidades:**
- Validação de nome (mínimo 3 caracteres, não pode ser numérico) e valor da compra (deve ser maior que 0)
- Parcelamento em **meses** ou **anos** (com conversão automática: `anos * 12`)
- Cálculo de juros compostos e exibição do montante final e valor do acréscimo
- Geração de comprovante visual no terminal

---

### 🧮 Exercício 03 — Cálculos SA (Operações Matemáticas)

**Objetivo:** Sistema para a empresa "Cálculos SA" que realiza as 4 operações matemáticas básicas via terminal.

**Estrutura:**
```
exercicio_03/
├── app.js
└── modulo/
    └── calculoMatematico.js
```

**Funcionalidades:**
- Aceita números no formato brasileiro com `.replace(',', '.')`
- Normaliza a operação digitada com `.toLowerCase()`
- Validação de campos vazios e entradas não numéricas
- Operações: **Soma, Subtração, Multiplicação e Divisão**
- Proteção contra divisão por zero

---

### 💸 Exercício 04 — Validação e Cálculos v2.0

**Objetivo:** Versão mais avançada do sistema de cálculos, com melhor organização de funções e inclusão de gerador de tabuada.

**Estrutura:**
```
exercicio_04/
├── app.js
└── modulo/
    ├── calcular.js
    └── tabuada.js
```

**Conceitos abordados:**
- Funções anônimas: `const calcular = function(...)`
- Função de validação dedicada (`validarDados`) que retorna booleano
- `switch/case` para seleção de operação matemática
- **Arrow Functions:** `const somar = (n1, n2) => n1 + n2`
- Gerador de tabuada com estrutura `for`

---

### 📚 Exercício 05 — Sistema Integrado de Exercícios Lógicos *(em andamento)*

**Objetivo:** Aplicação de console com menu interativo que agrupa 5 ferramentas de lógica.

**Estrutura:**
```
exercicio_05/
├── app.js
└── modulo/
    ├── config.js
    ├── imc.js
    ├── mediaEscolar.js
    ├── tabuada.js
    ├── fatorial.js
    ├── numeros.js
    └── validarDados.js
```

**Funcionalidades do menu:**
1. **Cálculo de IMC** — Calcula e classifica o IMC (abaixo do peso, normal, sobrepeso, obesidade I/II/III)
2. **Médias Escolares** — Relatório com tratamento de gênero, média e lógica de exame final
3. **Tabuada Personalizada** — Gera tabuadas com intervalo de multiplicandos e multiplicadores definidos pelo usuário
4. **Fatorial** — Calcula o fatorial exibindo a sequência completa da operação (ex: `5x4x3x2x1 = 120`)
5. **Pares e Ímpares** — Filtra e lista números dentro de um intervalo com contagem total

**Conceitos técnicos:**
- Programação assíncrona com `async/await` e `Promise`
- `readline` encapsulado como Promise em `config.js`
- Modularização completa com separação de lógica, validação e entrada de dados

---

### 🗺️ Exercício 06 — API de Estados e Cidades do Brasil

API REST para consulta de dados geográficos dos estados e cidades brasileiras.

**Versão:** 1.0 | **Data:** 01/04/2026

**Estrutura:**
```
exercicio_06/
├── app.js
├── package.json
└── modulo/
    ├── functions.js
    └── estados_cidades.js
```

**Endpoints disponíveis:**

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/estados` | Lista as siglas de todos os estados e quantidade total |
| GET | `/v1/senai/dados/estado/:uf` | Retorna nome, capital e região de um estado pela sigla |
| GET | `/v1/senai/capital/estado/:uf` | Retorna os dados da capital de um estado |
| GET | `/v1/senai/estados/regiao/:regiao` | Retorna todos os estados de uma região |
| GET | `/v1/senai/estados/capital/brasil` | Retorna os estados que já foram capital do Brasil |
| GET | `/v1/senai/estados/cidade/:uf` | Retorna todas as cidades de um estado |
| GET | `/v1/senai/help` | Documentação completa dos endpoints |

```bash
npm install
node app.js
# Disponível em: http://localhost:8080
```

---

### 📱 Exercício 07 — WhatsApp Data API

API REST para simulação e consulta de dados de conversas do WhatsApp.

**Versão:** 1.0 | **Data:** 08/04/2026

**Estrutura:**
```
exercicio_07/
├── app.js
├── package.json
└── modulo/
    ├── functions.js
    └── contatos.js
```

**Endpoints disponíveis:**

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/whatsapp/dados` | Retorna todos os usuários, contatos e conversas |
| GET | `/v1/whatsapp/dados/conta/profile/usuario` | Dados de perfil editáveis (`?nick=`) |
| GET | `/v1/whatsapp/dados/contato/pessoal/usuario/:numero` | Dados pessoais dos contatos de um usuário |
| GET | `/v1/whatsapp/dados/all/mensagens/usuario/:contato` | Todas as mensagens de uma conta |
| GET | `/v1/whatsapp/dados/usuario/:numero` | Conversa específica (`?contato=Nome`) |
| GET | `/v1/whatsapp/pesquisa/:numero` | Busca por palavra-chave (`?palavra=termo`) |
| GET | `/v1/whatsapp/help` | Documentação resumida da API em JSON |

**Respostas padrão:**

| Status | Descrição |
|--------|-----------|
| `200` | Requisição bem-sucedida |
| `404` | Nenhum dado encontrado |

```bash
npm install
node app.js
# Disponível em: http://localhost:8080
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Node.js    | Ambiente de execução |
| Express    | Framework HTTP para APIs |
| CORS       | Controle de acesso entre origens |
| Readline   | Entrada de dados via terminal (nativo) |

---

## 👤 Autora 
[Daniele Silva Santos](https://www.linkedin.com/in/danielesilvasantos/)
