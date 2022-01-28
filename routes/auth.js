const { Router } = require("express");
const { login, renovartoken } = require("../controllers/auth");
const { validarCampos, validarJWT } = require("../middlewares");

const router = Router();

router.post("/login", login);
router.get("/", [validarJWT, validarCampos], renovartoken);

module.exports = router;
