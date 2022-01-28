const { Router } = require("express");
const { check } = require("express-validator");
const {
  getTiendas,
  createTienda,
  updateTienda,
  deleteTienda,
} = require("../controllers/tienda");
const { IdTiendaExiste } = require("../helpers/db-validators");
const { validarCampos, validarJWT } = require("../middlewares");

const router = Router();

router.get("/", [validarJWT, validarCampos], getTiendas);

router.post(
  "/",
  [
    validarJWT,
    check(
      "nombre",
      "El nombre de la tienda debe tener un minimo de 6 digitos"
    ).isLength({ min: 6 }),
    check(
      "nombre",
      "El nombre de la tienda debe tener un maximo de 24 digitos"
    ).isLength({ max: 24 }),
    validarCampos,
  ],
  createTienda
);

router.put(
  "/:id",
  [
    validarJWT,
    check("id", "El id debe ser valido").isMongoId(),
    check("id").custom(IdTiendaExiste),
    validarCampos,
  ],
  updateTienda
);

router.delete("/:id", [validarJWT, validarCampos], deleteTienda);

module.exports = router;
