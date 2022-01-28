const { Schema, model } = require("mongoose");

const TiendaSchema = Schema({
  // usuario: {
  //   type: String,
  //   require: [true, "El usuario es obligatorio"],
  // },
  // password: {
  //   type: String,
  //   require: [true, "El password es obligatorio"],
  // },
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  direccion: {
    type: String,
    require: [true, "La direccion es obligatorio"],
  },
  referencia: {
    type: String,
    require: [true, "La referencia es obligatorio"],
  },
  jefe: {
    type: String,
    require: [true, "El jefe es obligatorio"],
  },
  estado: {
    type: Boolean,
    require: [true, "El estado es obligatorio"],
  },
  img: {
    type: String,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = model("Tienda", TiendaSchema);
