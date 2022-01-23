const { request, response } = require("express");

const Producto = require("../models/Productos");
const Tienda = require("../models/Tienda");

const getProductos = async (req = request, res = response) => {
  const productos = await Producto.findAll({
    // include: [{ model: Tienda }],
  });
  res.json({ productos });
};

const createProducto = async (req = request, res = response) => {
  // const { nombre, descripcion, precio, cantidad, tienda_id } = req.body;
  try {
    const data = {
      ...req.body,
      // createdAt: new Date(),
    };

    const productodb = await Producto.create(data);
    res.json(productodb);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrado",
    });
  }
};

const updateProducto = async (req = request, res = response) => {
  const { id } = req.params;
  const { precio, cantidad } = req.body;
  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(400).json({
        msg: "No existe un producto con el id" + id,
      });
    }
    await producto.update({ precio, cantidad });
    res.json({ producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrado",
    });
  }
};

module.exports = {
  getProductos,
  createProducto,
  updateProducto,
};
