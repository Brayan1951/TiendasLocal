const { Router } = require("express");
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/producto");

const router = Router();

router.get("/", getProductos);

router.post("/", createProducto);

router.put("/:id", updateProducto);

router.delete("/:id", deleteProducto);

module.exports = router;
