const { DataTypes } = require("sequelize");

const db = require("../database/conectionSql");

const Producto = require("./Productos");

const Tienda = db.define("Tienda", {
  nombre: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  referencia: {
    type: DataTypes.STRING,
  },
  jefe: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Tienda;
