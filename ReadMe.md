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

## Make API request to these endpoints

POST - http://localhost:3000/api/users/signup (Sign Up User)
GET - http://localhost:3000/api/users/login (Login User)
GET - http://localhost:3000/api/marvel (Get Marvel Characters)

## Create a new User

### Request

`POST api/users/signup`

    curl --location 'http://localhost:3000/api/users/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "John Doe",
        "email": "user@user.com",
        "phoneNumber": "1234567891",
        "password": "123456"
    }'

### Response

    {
        "id": "7af44f61-98b9-434f-a192-88958465f3a0",
        "name": "John Doe",
        "email": "user@user.com",
        "phoneNumber": "1234567891",
        "updatedAt": "2024-02-05T20:07:36.719Z",
        "createdAt": "2024-02-05T20:07:36.719Z"
    }

## Login as Registered User

### Request

`GET api/users/login`

    curl --location --request GET 'http://localhost:3000/api/users/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "john.doe@example.com",
        "password": "yourPassword123"
    }'

### Response

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YWY0NGY2MS05OGI5LTQzNGYtYTE5Mi04ODk1ODQ2NWYzYTAiLCJpYXQiOjE3MDcxNjM2NzQsImV4cCI6MTcwNzE2NzI3NH0.EpUGtuFQuEL-P2sdtEPL9mdr_U_wySI2LyZ7Wi8RPFI",
        "user": {
            "id": "7af44f61-98b9-434f-a192-88958465f3a0",
            "name": "John Doe",
            "email": "john.doe@example.com",
            }
    }

## Search for Marvel Character

### Request

`GET api/marvel`

    curl --location 'http://localhost:3000/api/marvel?name=spider' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhMjkxNWNkYi1hMjgzLTQ2YzAtODUxZC01Y2MwYWRhNjU2YzIiLCJpYXQiOjE3MDcxNjM1MDksImV4cCI6MTcwNzE2NzEwOX0.9st-BUts43SVqSc6wC06TWG3jWY_YSS3OZZ4PjKCy0k'

### Response

    [
    "3-D Man",
    "A-Bomb (HAS)",
    "A.I.M.",
    "Aaron Stack",
    "Abomination (Emil Blonsky)",
    "Abomination (Ultimate)",
    "Absorbing Man",
    "Abyss",
    "Abyss (Age of Apocalypse)",
    "Adam Destine",
    "Adam Warlock",
    "Aegis (Trey Rollins)",
    "Aero (Aero)",
    "Agatha Harkness",
    "Agent Brand",
    "Agent X (Nijo)",
    "Agent Zero",
    "Agents of Atlas",
    "Aginar",
    "Air-Walker (Gabriel Lan)"
    ]

## Author

[Aakashmangla2000](https://aakashmangla.web.app/)
