# Node.js with MySQL quick example

> Pequeno crud usando Node.js + MySQL

## Setup

### Depedências

- [MySQL](https://github.com/mysqljs/mysql)
- [Yarn](https://yarnpkg.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)

### Passos para executar

- Faça o download deste repositório na sua máquina
- Instala as depedências executando `yarn add .`
- Cria o arquivo `.env` e substitua por informações do seu banco:

```
DB_HOST=SEU_LOCALHOST
DB_USER=SEU_USUARIO
DB_PASS=SUA_SENHA
DB_NAME=NOME_DO_BANCO

APP_PORT=3000
```

- Finalmente, execute na `CMD` dentro do projecto o comando: `yarn dev`
- Visita `localhost:3000/` e enjoy 🎉!

## Contribuindo 👨‍👩‍👧‍👧

Contribuições, issues e funcionalidades novas são sempre bem-vindas.