const { Router } = require("express");
const {
  getProductos,
  createProducto,
  updateProducto,
} = require("../controllers/producto");

const router = Router();

router.get("/", getProductos);

router.post("/", createProducto);

router.put("/:id", updateProducto);

module.exports = router;
