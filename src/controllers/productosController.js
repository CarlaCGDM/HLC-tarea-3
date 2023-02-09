const productosServices = require("../services/productosServices");

//  /api/v1/productos
const getAllProducts = (req, res, next) => {
  const allProducts = productosServices.getAllProducts();
  if (Object.keys(allProducts).length != 0) {
    res.send(allProducts);
  } else {
    res.status(404).end();
  }
};

//  /api/v1/productos
const createOneProduct = (req, res, next) => {
  const { body } = req;
  console.log(body);

  //Compruebo que no falten datos

  if (!body.nombre || !body.precio || !body.categoria)
    res.status(400).send({mensaje: "faltan datos"});
  else {

    // Extraigo los datos del body de la petición para mandarlos al servicio 
    const newProduct = {
      "nombre": body.nombre,
      "precio": body.precio,
      "categoria": body.categoria
    }

    //Compruebo si ya existe ese producto
    if (productosServices.getOneProduct(newProduct.nombre)) {
      res.status(400).send({mensaje: "ya existe el producto"});
    }

    const createdProduct = productosServices.createOneProduct(newProduct);

    if (createdProduct) res.status(200).send(createdProduct);
    else res.status(406).end();
  }

  res.end();
};

//  /api/v1/productos/:prod
const getOneProduct = (req, res, next) => {
  //PRIMERO obtengo el parámetro de ruta
  const { prod } = req.params;

  const oneProduct = productosServices.getOneProduct(prod);

  if (oneProduct) {
    res.send(oneProduct);
  } else {
    res.status(404);
  }
};

// /api/v1/productos/:prod
const updateOneProduct = (req, res, next) => {
  res.send("UPDATE ONE PRODUCT");
};

// /api/v1/productos/:prod
const deleteOneProduct = (req, res, next) => {
  res.send("DELETE ONE PRODUCT");
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};