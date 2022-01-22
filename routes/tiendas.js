const { Router } = require("express");
const { getTiendas } = require("../controllers/tienda");

const router = Router();

router.get("/", getTiendas);

module.exports = router;
