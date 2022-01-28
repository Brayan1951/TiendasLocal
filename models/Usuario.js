const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatorio"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
