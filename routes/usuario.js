const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPost,
  usuarioPut,
  usuarioDelete,
} = require("../controllers/usuario");
const { emailExiste, IdExiste } = require("../helpers/db-validators");
const { validarCampos, validarJWT } = require("../middlewares");

const router = Router();

router.get("/", usuariosGet);
router.post(
  "/",
  [
    check("correo").custom(emailExiste),
    check("password", "El correo debe se mayor a 5 digitos").isLength({
      min: 6,
    }),

    validarCampos,
  ],
  usuariosPost
);
router.put(
  "/:id",
  [
    check("id", "No es un Id Valido").isMongoId(),
    check("id").custom(IdExiste),
    validarCampos,
  ],
  usuarioPut
);
router.delete(
  "/:id",
  [
    validarJWT,
    check("id", "No es un Id Valido").isMongoId(),
    check("id").custom(IdExiste),
    validarCampos,
  ],
  usuarioDelete
);

module.exports = router;
