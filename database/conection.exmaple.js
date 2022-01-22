const { Sequelize } = require("sequelize");

const db = new Sequelize("database", "username", "password", {
  host: "your host",
  dialect: "mysql",
  port: 3306,
});

module.exports = db;
