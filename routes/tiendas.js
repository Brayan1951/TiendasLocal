const { Router } = require("express");
const {
  getTiendas,
  createTienda,
  updateTienda,
  deleteTienda,
} = require("../controllers/tienda");

const router = Router();

router.get("/", getTiendas);

router.post("/", createTienda);

router.put("/:id", updateTienda);

router.delete("/:id", deleteTienda);

module.exports = router;
