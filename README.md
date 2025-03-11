# Aplicação Node.js com MySQL e Swagger

Esta é uma aplicação backend desenvolvida em **Node.js** utilizando o framework **Express**. 

Ela gerencia dispositivos (`Devices`) e categorias (`Categories`), com integração a um banco de dados **MySQL**. 

A aplicação também possui documentação interativa da API usando **Swagger**.

---

## Tecnologias Utilizadas

- **Node.js**: Versão 20.12.0
- **Express**: Framework para criação da API RESTful
- **MySQL**: Banco de dados relacional
- **Sequelize**: ORM para interação com o MySQL
- **Swagger**: Documentação interativa da API
- **Docker**: Para subir o banco de dados MySQL localmente

---

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 20.12.0 ou superior)
- [Docker](https://www.docker.com/) (opcional, para subir o banco de dados MySQL)
- [MySQL](https://www.mysql.com/) (caso não use Docker)

---

## Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/victorfpereira/eldoratestbackend.git
cd eldoratestbackend
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure o Banco de Dados

Usando Docker (recomendado)
Na pasta docker, há um arquivo `docker-compose.yml` para subir um container do MySQL. Execute o seguinte comando:

```bash
docker-compose up -d
```

Isso criará um container MySQL rodando na porta 3306 com as seguintes credenciais:

- **Host**: localhost
- **Porta**: 3306
- **Usuário**: device_user
- **Senha**:password
- **Banco de Dados**: device_management

Usando MySQL Local

Se preferir usar um MySQL local, configure o arquivo .env com as credenciais do seu banco de dados:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=device_user
DB_PASS=password
DB_NAME=device_management
```

### 4. Sobre as migrations

A aplicação vai executar as migrations na primeira execução.

### 5. Inicie a Aplicação

A aplicação roda na porta 5000. Para iniciar o servidor, execute:

```bash
npm start
```

## Acessando a API

A aplicação estará disponível em:

```
http://localhost:5000
```

## Endpoints da API

- Devices:

  - `GET /devices`: Retorna a lista de dispositivos.
  - `POST /devices`: Cria um novo dispositivo.-
  - `DELETE /devices/:id`: Exclui um dispositivo pelo ID.

- Categories:
  - `GET /categories`: Retorna a lista de categorias.
  - `POST /categories`: Cria uma nova categoria.
  - `DELETE /categories/:id`: Exclui uma categoria pelo ID.

## Documentação com Swagger

A documentação está disponível no em:

```
http://localhost:5000/api-docs
```
## Contato
Se tiver dúvidas ou sugestões, entre em contato:

- **Nome**: Victor Freire
- **Email**: victor.desenvolvedor@gmail.com
- **GitHub**: `victorfpereira`

