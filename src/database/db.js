const Sequelize = require("sequelize");

const connection = new Sequelize(
  process.env.db_base,
  process.env.db_user,
  process.env.db_pass,
  {
    host: process.env.db_host,
    port: 5432,
    dialect: "postgres",
  }
);

module.exports = connection;
