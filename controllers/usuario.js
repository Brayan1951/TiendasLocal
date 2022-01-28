const bcryptjs = require("bcryptjs");
const { request, response } = require("express");

const Usuario = require("../models/Usuario");

const usuariosGet = async (req = request, res = response) => {
  const query = { estado: true };
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query),
  ]);
  res.json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req = request, res = response) => {
  const { correo, password } = req.body;

  const usuario = new Usuario({ correo, password });
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();
  res.json({
    msg: "El usuario se ha creado correctamente",
    usuario,
  });
};

const usuarioPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { password, ...resto } = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuarioDB = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuarioDB);
};

const usuarioDelete = async (req = request, res = response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json(usuario);
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuarioPut,
  usuarioDelete,
};
