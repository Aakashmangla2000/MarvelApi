<h1 align="center">
Marvel API
</h1>
<p align="center">
PostgreSQL, Express, NodeJS, TypeScript, Sequelize
</p>

## clone or download

```terminal
$ gh repo clone Aakashmangla2000/MarvelApi
```

## project structure

```terminal
db/
src/
```

# Usage (Server app on your machine)

## Prerequisites

- [PostgreSQL - v15](https://www.postgresql.org/download/)
- [Node - v20](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

## Database setup (PSQL)

```terminal
$ psql --username=postgres
postgres=# create database marvel;
```

## Server-side usage(PORT: 3000)

```terminal
$ cp .env.example .env
$ yarn install

Note: You have to add the details of database in env file before

$ yarn build
$ yarn db:migrate
$ yarn db:seed:all
$ yarn start
```

## Author

[Aakashmangla2000](https://aakashmangla.web.app/)
