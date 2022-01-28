const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  descripcion: {
    type: String,
    require: [true, "La descripcion es obligatorio"],
  },
  precio: {
    type: Number,
    require: [true, "El precio es obligatorio"],
  },
  cantidad: {
    type: Number,
    require: [true, "La cantidad es obligatorio"],
  },
  tienda: {
    type: Schema.Types.ObjectId,
    ref: "Tienda",
  },
});

module.exports = model("Producto", ProductoSchema);
