import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config(); // Load environment variables from .env file

interface Config {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
}

const config: Config = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "marvel",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: (process.env.DB_DIALECT as Dialect) || "postgres",
  },
};

module.exports = config;
