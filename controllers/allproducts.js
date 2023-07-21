import { productoServicios } from "../services/productos-servicios.js";

const allProducts = document.querySelector("[data-allProducts]");

const imprimirCategoria = async () => {
  try {
    const url = new URL(window.location);
    const categoriaSolicitada = url.searchParams.get("categoria");
    const data = await productoServicios.allProductsCategoria(
      categoriaSolicitada
    );
    data.forEach(({ imageUrl, name, price, categoria, description, id }) => {
      const productos = productoServicios.mostrarProducto(
        imageUrl,
        name,
        price,
        categoria,
        description,
        id
      );
      allProducts.appendChild(productos);
    });
  } catch (err) {
    console.log("Ocurrio un error", err);
  }
};

imprimirCategoria();
