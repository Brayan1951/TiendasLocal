const { Sequelize } = require("sequelize");

const db = new Sequelize("5vEW4JkzKO", "5vEW4JkzKO", "vkq3asNhaG", {
  host: "remotemysql.com",
  dialect: "mysql",
  port: 3306,
});

module.exports = db;
