const { DataTypes } = require("sequelize");

const Tienda = require("./Tienda");

const db = require("../database/conectionSql");

const Producto = db.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.FLOAT,
  },
  cantidad: {
    type: DataTypes.INTEGER,
  },
});

Tienda.hasMany(Producto, { foreignKey: "tienda_id" });
Producto.belongsTo(Tienda, { foreignKey: "tienda_id" });

module.exports = Producto;
