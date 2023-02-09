const express = require("express");
const router = express.Router();
const productosController = require("../../controllers/productosController")

// localhost:3001/api/v1/productos/
router.route("/")
    .get(productosController.getAllProducts)
    .post(productosController.createOneProduct);

// localhost:3001/api/v1/productos/:prod
router.route("/:prod")
    .get(productosController.getOneProduct)
    .put(productosController.updateOneProduct)
    .delete(productosController.deleteOneProduct);


module.exports.router = router;