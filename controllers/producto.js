const { request, response } = require("express");

const Producto = require("../models/Productos");

const getProductos = async (req = request, res = response) => {
  const productos = await Producto.find();
  res.json({ productos });
};

const createProducto = async (req = request, res = response) => {
  const nombre = req.body.nombre.toLowerCase();
  try {
    const data = {
      ...req.body,
      usuario: req.usuario,
    };

    const productodb = new Producto(data);
    productodb.save();
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
    const producto = await Producto.findByIdAndUpdate(id, { precio, cantidad });

    res.json({ producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrado",
    });
  }
};

const deleteProducto = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByIdAndDelete(id);
    res.json({ msg: "producto eliminado con el id " + id });
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
  deleteProducto,
};
