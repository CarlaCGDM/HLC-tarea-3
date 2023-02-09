const datos = require("./productos.json")
const fs = require("fs")

const getAllProducts = () => {

    return datos.productos
    
}

const getOneProduct = (nombre) => {
    const oneProduct = datos.productos[nombre]
    return oneProduct
}

const insertProduct = (producto) => {
    //meto el producto en el objeto productos
    const nombre = producto.nombre
    datos.productos[nombre] = producto

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/productos.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneProduct(nombre)
}

const deleteProduct = (nombre) => {

    //copia de los datos sin el producto objetivo
    const dataMinusTarget = datos.productos.filter(prod => prod.nombre !== nombre);

    //escribo el fichero con esos nuevos datos
    fs.writeFileSync(
        "./src/database/productos.json",
        JSON.stringify(dataMinusTarget, null, 2),
        "utf8"
    );

}

module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct,
    deleteProduct
}