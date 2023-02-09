const productosModelo = require("../database/productosModelo");
const {v4: uuid} = require("uuid")

const getAllProducts = () => {
  //Se llama al MODELO, más concretamente, A LA FUNCION QUE OBTIENE TODOS LOS PRODUCTOS
  const allProducts = productosModelo.getAllProducts();
  return allProducts;
};

const createOneProduct = (producto) => {
  
  // Implemento la lógica de negocio. Esta es, que el producto tiene un id
  //que tiene una fecha de alta y una fecha de modificación
  const productoNuevo = {
    ...producto,
    id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
    fechaAlta: new Date().toLocaleDateString(),
    fechaModificacion: new Date().toLocaleDateString(),
  };

  // Llamo al modelo para realizar esa interacción con la BDD
  const productoInsertado = productosModelo.insertProduct(productoNuevo)
  
  if(!productoInsertado) return false
  return productoInsertado
};

const getOneProduct = (nombre) => {
  const oneProduct = productosModelo.getOneProduct(nombre);
  return oneProduct;
};

const updateOneProduct = () => {
  //TODO: implementar funcionalidad para actualizar un producto
};

const deleteOneProduct = () => {
  //TODO: implementar funcionalidad para eliminar un producto
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};