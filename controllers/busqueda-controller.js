import { productoServicios } from "../services/productos-servicios.js";

const resultados = document.querySelector("[data-producto-busqueda]");
const tituloBusqueda = document.querySelector("[data-titulo-busqueda]");

const mostrarResultados = async () => {
  try {
    const url = new URL(window.location);
    const textoBuscado = url.searchParams.get("buscar");

    if (textoBuscado === null) {
      console.log("hubo un error al error de buscar el productos");
    }
    const textoBuscadoLower = textoBuscado.toLowerCase();
    let cantidadResultados = 0;

    const data = await productoServicios.listaProductos();
    data.forEach(({ imageUrl, name, price, categoria, description, id }) => {
      const nameLower = name.toLowerCase();
      const categoriaLower = categoria.toLowerCase();
      const validarName = nameLower.includes(textoBuscadoLower);
      const validarCategoria = categoriaLower.includes(textoBuscadoLower);
      if (validarName || validarCategoria) {
        const productosBuscados = productoServicios.mostrarProducto(
          imageUrl,
          name,
          price,
          categoria,
          description,
          id
        );
        resultados.appendChild(productosBuscados);
        cantidadResultados++;
      }
    });
    if (cantidadResultados > 0) {
      const textoTitulo = `<h2 class="product__title">Resultados de la busqueda de "${textoBuscado}"</h2>`;
      tituloBusqueda.innerHTML = textoTitulo;
    }
    if (cantidadResultados === 0) {
      const textoTitulo = `<h2 class="product__title">No se encontraron resultados de "${textoBuscado}"</h2>`;
      tituloBusqueda.innerHTML = textoTitulo;
    }
  } catch (e) {
    console.log("Ocurrio un error", e);
  }
};

mostrarResultados();
