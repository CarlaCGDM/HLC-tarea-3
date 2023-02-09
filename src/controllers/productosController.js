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

    } else {

      const createdProduct = productosServices.createOneProduct(newProduct);

      if (createdProduct) res.status(200).send(createdProduct);
      else res.status(406).end();

    }
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

  //producto a modificar
  const { prod } = req.params;

  //datos nuevos
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
    if (productosServices.getOneProduct(prod)) {

      //actualizamos el producto antiguo con los datos del producto nuevo
      const updatedProduct = productosServices.updateOneProduct(prod, newProduct);

      if (updatedProduct) res.status(200).send(updatedProduct);
      else res.status(406).end();

    } else {

      res.status(404).send({mensaje: "no se puede modificar el producto porque no existe"});

    }
  }

  res.end();
};

// /api/v1/productos/:prod
const deleteOneProduct = (req, res, next) => {

  //el producto a borrar
  const { prod } = req.params;

  //borramos el producto
  const deletedProduct = productosServices.deleteOneProduct(prod);

  //si el producto existe devolvemos los datos del producto borrado
  //si no existe devolvemos mensaje
  if (!deletedProduct) {
    res.status(404).send({"mensaje":"no se puede borrar el producto porque no existe"});
  } else {
    res.send(200).send({"mensaje":"se borró correctamente el producto"});
  }

};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};