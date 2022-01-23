const { request, response } = require("express");

const Producto = require("../models/Productos");
const Tienda = require("../models/Tienda");

const getProductos = async (req = request, res = response) => {
  const productos = await Producto.findAll({
    // include: [{ model: Tienda }],
  });
  res.json({ productos });
};

module.exports = {
  getProductos,
};
