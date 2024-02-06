import path from "path";
import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "..", "dist/config.js"))[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

export { Sequelize, sequelize };
