# Projeto do Curso de Node.js

Este projeto foi desenvolvido com base no [Curso de Node.js Para Completos Iniciantes](https://www.youtube.com/watch?v=IOfDoyP1Aq0) do canal Full Stack Club. Ele serve como um guia prático e um registro do aprendizado, implementando um servidor web completo com uma API RESTful para um CRUD de usuários.

Em alguns pontos, o código pode apresentar pequenas diferenças em relação ao curso original, refletindo adaptações ou abordagens alternativas exploradas durante o estudo.

## O que é Node.js?

**Node.js** é um ambiente de execução JavaScript do lado do servidor (*server-side*). De forma simples, ele permite que você use JavaScript — uma linguagem tradicionalmente de *front-end* (navegadores) — para construir aplicações de *back-end*, como APIs, servidores web e outras ferramentas de linha de comando. Sua principal característica é a arquitetura orientada a eventos e não-bloqueante, o que o torna muito eficiente para operações de entrada e saída (I/O).

## `module.exports`

No ecossistema do Node.js, cada arquivo é tratado como um **módulo**. O `module.exports` é um objeto especial que define o que um módulo irá "exportar", ou seja, o que ele tornará disponível para outros arquivos que o importarem através da função `require()`. É a forma padrão de compartilhar funções, objetos ou variáveis entre diferentes partes da sua aplicação.

## Dependências do Projeto

O projeto utiliza as seguintes dependências, definidas no arquivo `package.json`:

### `dependencies` (Dependências de Produção)
São pacotes essenciais para a aplicação funcionar em produção.

- **`express`**: Um framework minimalista e flexível para Node.js, usado para construir servidores web e APIs de forma rápida e organizada.
- **`mongoose`**: Uma biblioteca de ODM (Object Data Modeling) para MongoDB. Ela facilita a interação com o banco de dados, permitindo definir schemas, validar dados e realizar queries de forma mais intuitiva.
- **`dotenv`**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`. É usado para gerenciar informações sensíveis (como senhas e chaves de API) fora do código-fonte.
- **`ejs`**: *Embedded JavaScript templating*. É um *view engine* que permite gerar HTML dinamicamente no servidor, injetando dados em templates. É usado para renderizar a página que exibe a lista de usuários.

### `devDependencies` (Dependências de Desenvolvimento)
São pacotes usados apenas durante o desenvolvimento e teste.

- **`nodemon`**: Uma ferramenta que monitora alterações nos arquivos do projeto e reinicia o servidor automaticamente. Isso agiliza muito o desenvolvimento, pois você não precisa parar e iniciar o servidor a cada mudança no código.

## Como Rodar a Aplicação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- Uma conta no [MongoDB Atlas](https://cloud.mongodb.com/) para criar um banco de dados na nuvem.

### 2. Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/review-fullstack-fsc.git
cd review-fullstack-fsc/curso-nodejs
npm install
```

### 3. Configuração do Banco de Dados
1. Crie um cluster gratuito no [MongoDB Atlas](https://cloud.mongodb.com/).
2. Na seção **Database Access**, crie um usuário e senha para o banco de dados. Guarde essas credenciais.
3. Na seção **Network Access**, adicione seu endereço de IP à lista de permissões (ou permita acesso de qualquer lugar, `0.0.0.0/0`, apenas para fins de desenvolvimento).
4. Vá para **Databases**, clique em **Connect** no seu cluster, selecione **"Connect your application"** e copie a string de conexão (Connection String).

### 4. Variáveis de Ambiente
Na raiz da pasta `curso-nodejs`, crie um arquivo chamado `.env` a partir do exemplo:
```bash
# No Windows
copy .env.example .env

# No macOS/Linux
cp .env.example .env
```
Abra o arquivo `.env` e preencha com suas credenciais do MongoDB Atlas:
```
MONGODB_USERNAME=seu_usuario_do_banco
MONGODB_PASSWORD=sua_senha_do_banco
```

### 5. Execução
Com tudo configurado, inicie o servidor em modo de desenvolvimento:
```bash
npm run start:dev
```
O terminal deverá exibir a mensagem: `Rodando com Express na porta 8080!`.

## Testando a API (Endpoints)

Você pode usar ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os *endpoints* da API.

### Métodos HTTP
- **`GET`**: Solicita a leitura de um recurso.
- **`POST`**: Envia dados para o servidor para criar um novo recurso.
- **`PUT`**: Substitui completamente um recurso existente com os novos dados enviados.
- **`PATCH`**: Atualiza parcialmente um recurso existente.
- **`DELETE`**: Remove um recurso.

### Endpoints Disponíveis

- **`GET /users`** - Retorna uma lista com todos os usuários.
- **`GET /users/:id`** - Retorna um usuário específico pelo seu `id`.
- **`POST /users`** - Cria um novo usuário. Envie um JSON no corpo da requisição:
  ```json
  {
    "firstName": "Seu",
    "lastName": "Nome",
    "email": "seu_email@exemplo.com",
    "password": "sua_senha_segura"
  }
  ```
- **`PATCH /users/:id`** - Atualiza um usuário. Envie no corpo da requisição apenas os campos que deseja alterar.
- **`DELETE /users/:id`** - Deleta um usuário.

## Módulos de Estudo (`index.js`)

No arquivo `index.js`, os seguintes módulos estão comentados:
```javascript
// // require("./modules/path");
// // require("./modules/fs");
// // require("./modules/http");
```
Eles foram usados durante o curso para explicar conceitos fundamentais do Node.js, como manipulação de caminhos (`path`), sistema de arquivos (`fs`) e a criação de um servidor HTTP nativo (`http`). Eles podem ser descomentados individualmente para fins de teste e estudo.

## Renderização com EJS

O projeto utiliza `EJS` (*Embedded JavaScript templating*) como *view engine*. A rota `GET /views/users` é responsável por renderizar uma página HTML no servidor, que exibe a lista de usuários cadastrados, e enviá-la para o cliente. Para uma melhor organização, o código EJS foi componentizado em parciais (partials), como `head.ejs` e `navbar.ejs`, que são reutilizados na página principal.