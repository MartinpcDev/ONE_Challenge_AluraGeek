import { productoServicios } from "../services/productos-servicios.js";

const adminProducts = document.querySelector("[data-adminProducts]");

const render = async () => {
  try {
    const data = await productoServicios.listaProductos();
    data.forEach(({ imageUrl, name, price, categoria, description, id }) => {
      const producto = productoServicios.mostrarProducto(
        imageUrl,
        name,
        price,
        categoria,
        description,
        id
      );
      adminProducts.appendChild(producto);
    });
  } catch (error) {
    console.log("Ocurrio un error ", error);
  }
};

render();
