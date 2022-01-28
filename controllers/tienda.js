const { request, response } = require("express");

const Tienda = require("../models/Tienda");

const getTiendas = async (req = request, res = response) => {
  const tiendas = await Tienda.find();

  res.json({ tiendas });
};

const createTienda = async (req = request, res = response) => {
  const {
    // usuario,
    // password,
    nombre,
    direccion,
    referencia,
    jefe,
    img,
    estado = true,
  } = req.body;
  try {
    const data = {
      // usuario,
      // password,
      nombre,
      direccion,
      referencia,
      jefe,
      img,
      estado,
      usuario: req.usuario,
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
    const tienda = await Tienda.findByIdAndUpdate(id, {
      direccion,
      referencia,
    });

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
    const tienda = await Tienda.findByIdAndUpdate(id, { estado: false });

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
