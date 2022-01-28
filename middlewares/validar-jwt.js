const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "no hay token en la peticion",
    });
  }
  try {
    const { id } = jwt.verify(token, process.env.SECRETOKEY);
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(401).json({
        msg: "Usuario no existe en BD",
      });
    }
    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Usuario esta deshabilitado",
      });
    }
    req.usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    // throw new Error("Token no valido");
    res.status(401).json({
      msg: "Token no valido o no existe en la peticion",
    });
  }
};

module.exports = {
  validarJWT,
};
