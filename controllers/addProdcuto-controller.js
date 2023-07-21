import { productoServicios } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    await productoServicios.crearProducto(
      url,
      nombre,
      precio,
      categoria,
      descripcion
    );
    window.location.href = "adminProducts.html";
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
});
