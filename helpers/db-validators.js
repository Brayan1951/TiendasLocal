const { Usuario, Tienda } = require("../models");
const Productos = require("../models/Productos");

const emailExiste = async (correo = "") => {
  const existe = await Usuario.findOne({ correo });

  if (existe) {
    throw new Error(`El email ${correo} ya esta registrado en DB`);
  }
};

const IdExiste = async (id = "") => {
  const existe = await Usuario.findById(id);
  if (!existe) {
    throw new Error(`El usuario con id: ${id} no existe en la DB`);
  }
};

const IdTiendaExiste = async (id = "") => {
  const existe = await Tienda.findById(id);
  if (!existe) {
    throw new Error(`La tienda con id: ${id} no existe en la DB`);
  }
};

const IdProductoExiste = async (id = "") => {
  const existe = await Productos.findById(id);
  if (!existe) {
    throw new Error(`El producto con id: ${id} no existe en la DB`);
  }
};

module.exports = {
  emailExiste,
  IdExiste,
  IdTiendaExiste,
  IdProductoExiste,
};
