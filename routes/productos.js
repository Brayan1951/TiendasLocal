const { Router } = require("express");
const { check } = require("express-validator");
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/producto");
const { validarJWT, validarCampos } = require("../middlewares");

const router = Router();

router.get("/", getProductos);

router.post(
  "/",
  [
    validarJWT,
    check(
      "nombre",
      "El nombre del producto debe tener un minimo de 6 digitos"
    ).isLength({ min: 6 }),
    check(
      "nombre",
      "El nombre del producto debe tener un maximo de 24 digitos"
    ).isLength({ max: 24 }),
    check(
      "descripcion",
      "La descripcion del producto debe tener un minimo de 6 digitos"
    ).isLength({ min: 6 }),
    check(
      "descripcion",
      "La descripcion del producto debe tener un maximo de 30 digitos"
    ).isLength({ max: 30 }),
    check("precio", "El precio debe ser mayor a 0").isFloat({ min: 0 }),
    check("cantidad", "La cantidad es obligatorio").not().isEmpty(),

    validarCampos,
  ],
  createProducto
);

router.put(
  "/:id",
  [
    validarCampos,
    check("precio", "el precio no puede ser 0").isFloat({ min: 0 }),
    check("cantidad", "La cantidad es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  updateProducto
);

router.delete("/:id", [validarCampos, validarCampos], deleteProducto);

module.exports = router;
