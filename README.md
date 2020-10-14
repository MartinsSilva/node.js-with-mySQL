# Node.js with MySQL quick example

> Pequeno CRUD usando Node.js + MySQL sem ORM

## Setup

### Depedências

- [MySQL](https://github.com/mysqljs/mysql)
- [Yarn](https://yarnpkg.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)

### Passos para executar

- Faça o download deste repositório na sua máquina
- Instale as depedências executando `yarn` ou `npm install` (Se estiver a usar o npm)
- Crie um arquivo com nome de `.env` e substitua por informações do seu banco:

```
DB_HOST=SEU_LOCALHOST
DB_USER=SEU_USUARIO
DB_PASS=SUA_SENHA
DB_NAME=NOME_DO_BANCO

APP_PORT=3000
```

- Finalmente, execute no `CMD` ou `Terminal` dentro da raiz do projecto o comando: `yarn run start:dev`
- acesse `localhost:3000` e enjoy! :smile:

## Contribuindo 👨‍👩‍👧‍👧

Contribuições, issues e funcionalidades novas são sempre bem-vindas.