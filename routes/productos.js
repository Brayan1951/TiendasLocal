const { Router } = require("express");
const { getProductos } = require("../controllers/producto");

const router = Router();

router.get("/", getProductos);

module.exports = router;
