import { productoServicios } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (id === null) {
    alert("Producto no existe");
  }
  const imagurl = document.querySelector("[data-url]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const categoria = document.querySelector("[data-categoria]");
  const descripcion = document.querySelector("[data-descripcion]");

  try {
    const detalle = await productoServicios.detalleProducto(id);
    if (
      detalle.imageUrl &&
      detalle.name &&
      detalle.price &&
      detalle.categoria &&
      detalle.description
    ) {
      imagurl.value = detalle.imageUrl;
      nombre.value = detalle.name;
      precio.value = detalle.price;
      categoria.value = detalle.categoria;
      descripcion.value = detalle.description;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imagurl = document.querySelector("[data-url]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;

  productoServicios
    .updateProducto(imagurl, nombre, precio, categoria, descripcion, id)
    .then(() => {
      window.location.href = "adminProducts.html";
    })
    .catch((error) => console.log("Ocurrio un error", error));
});
