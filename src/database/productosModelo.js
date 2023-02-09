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

    //ver si existe el producto
    const oneProduct = getOneProduct(nombre);

    //borrar el producto
    if (!oneProduct) {
        return false;
    } else {
        //borrar producto
        delete datos.productos[nombre];
    
        //escribir de nuevo el json
        fs.writeFileSync(
        "./src/database/productos.json",
        JSON.stringify(datos, null, 2),
        "utf8"
        );

        return true;
    }
  };

  const updateProduct = (prod, nuevosDatos) => {
    //cambiamos los valores de los campos
    datos.productos[prod].nombre = nuevosDatos.nombre;
    datos.productos[prod].precio = nuevosDatos.precio;
    datos.productos[prod].categoria = nuevosDatos.categoria;
    datos.productos[prod].fechaModificacion = nuevosDatos.fechaModificacion;

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
        "./src/database/productos.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );

    return nuevosDatos;
  }

module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct,
    deleteProduct,
    updateProduct
}