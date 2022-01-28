const bcryptjs = require("bcryptjs");
const { request, response } = require("express");
const { generarJWT } = require("../helpers/genera-jwt");
const Usuario = require("../models/Usuario");

const login = async (req = request, res = response) => {
  const { correo, password } = req.body;
  try {
    //   Verificacion si existe email
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario/Password no son correcots",
      });
    }
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "El usuario ha sido deshabilitado",
      });
    }
    // verificar el password
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario y/oPassword no son correctos",
      });
    }
    // generar jwt
    const token = await generarJWT(usuario.id);
    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const renovartoken = async (req, res = response) => {
  const { usuario } = req;
  const token = await generarJWT(usuario.id);
  res.json({ usuario, token });
};

module.exports = {
  login,
  renovartoken,
};
