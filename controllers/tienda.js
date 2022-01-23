const { request, response } = require("express");
const Producto = require("../models/Productos");

const Tienda = require("../models/Tienda");

const getTiendas = async (req = request, res = response) => {
  const tiendas = await Tienda.findAll({
    include: [{ model: Producto }],
  });

  // console.log(tiendas);
  res.json({ tiendas });
};

module.exports = {
  getTiendas,
};
