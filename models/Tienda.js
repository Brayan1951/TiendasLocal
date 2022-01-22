const { DataTypes } = require("sequelize");

const db = require("../database/conectionSql");

const Tiendas = db.define("Tiendas", {
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

module.exports = Tiendas;
