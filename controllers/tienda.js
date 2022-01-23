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

const createTienda = async (req = request, res = response) => {
  const { nombre, direccion, referencia, jefe, estado = true } = req.body;
  try {
    const data = {
      nombre,
      direccion,
      referencia,
      jefe,
      estado,
    };
    const tiendadb = await Tienda.create(data);
    res.json(tiendadb);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const updateTienda = async (req = request, res = response) => {
  const { id } = req.params;
  const { direccion, referencia } = req.body;

  try {
    const tienda = await Tienda.findByPk(id);
    if (!tienda) {
      return res.status(400).json({
        msg: "No existe una tienda con ese id" + id,
      });
    }

    await tienda.update({ direccion, referencia });
    res.json({ tienda });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "hable con el administrador",
    });
  }
};

const deleteTienda = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const tienda = await Tienda.findByPk(id);
    if (!tienda) {
      return res.status(400).json({
        msg: "No existe una tienda con ese id " + id,
      });
    }

    await tienda.update({ estado: false });
    res.json({ msg: "Tienda eliminada correctamente, id: " + id });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "hable con el administrador",
    });
  }
};

module.exports = {
  getTiendas,
  createTienda,
  updateTienda,
  deleteTienda,
};
