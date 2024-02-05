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

- [PostgreSQL](https://www.postgresql.org/download/)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

## Server-side usage(PORT: 3000)

```terminal
$ yarn install  // yarn install packages
$ yarn db:migrate
$ yarn db:seed:all
$ yarn dev   // run it locally
```

## Database setup (PSQL)

```terminal
$ psql --username=postgres
postgres=# create database marvel;
```

you might need to change the details of database in env

## Author

[Aakashmangla2000](https://aakashmangla.web.app/)
