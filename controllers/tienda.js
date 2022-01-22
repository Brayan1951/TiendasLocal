const { request, response } = require("express");

const Tiendas = require("../models/Tienda");

const getTiendas = async (req = request, res = response) => {
  const tiendas = await Tiendas.findAll();

  console.log(tiendas);
  res.json({ tiendas });
};

module.exports = {
  getTiendas,
};
