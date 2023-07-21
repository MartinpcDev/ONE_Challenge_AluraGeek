import { productoServicios } from "../services/productos-servicios.js";

const productosStarWars = document.querySelector("[data-starWarsCategory]");
const productosConsolas = document.querySelector("[data-consolasCategoria]");
const productosDiversos = document.querySelector("[data-diversosCategoria]");

const render = async () => {
  try {
    const data = await productoServicios.listaProductos();
    data.forEach(({ imageUrl, name, price, categoria, description, id }) => {
      if (categoria === "StarWars") {
        const producto = productoServicios.mostrarProducto(
          imageUrl,
          name,
          price,
          categoria,
          description,
          id
        );
        productosStarWars.appendChild(producto);
      }
      if (categoria === "Consolas") {
        const producto = productoServicios.mostrarProducto(
          imageUrl,
          name,
          price,
          categoria,
          description,
          id
        );
        productosConsolas.appendChild(producto);
      }

      if (categoria === "Diversos") {
        const producto = productoServicios.mostrarProducto(
          imageUrl,
          name,
          price,
          categoria,
          description,
          id
        );
        productosDiversos.appendChild(producto);
      }
    });
  } catch (err) {
    console.log("Ocurrio un error ", err);
  }
};

render();
