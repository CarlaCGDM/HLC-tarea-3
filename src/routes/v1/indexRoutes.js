const express = require("express");
const router = express.Router();
const productosRoutes = require("./productosRoutes")

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send(`<h1>¡Bienvenido a la API de productos!</h1>
    <ul>
    <li>Listado de productos: GET localhost:3001/api/v1/productos</li>
    <li>Crear nuevo producto: POST localhost:3001/api/v1/productos</li>
    <li>Detalles de un producto: GET localhost:3001/api/v1/productos/{nombre del producto}</li>
    <li>Borrar un producto:</li>
    </ul>`)
})

router.use("/productos",  productosRoutes.router);


module.exports.router = router