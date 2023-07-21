import { usuarioServicios } from "../services/user-service.js";

const form = document.querySelector("[data-form]");
const mail = document.querySelector("[data-email]");
const pass = document.querySelector("[data-password]");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    console.log("submit");
    console.log(mail.value, "--", pass.value);
    const users = await usuarioServicios.getUsuarios();
    users.forEach(({ name, email, password, id }) => {
      console.log(name, "--", email, "--", password, "--", id);

      if (email === mail.value && password === pass.value) {
        window.location.href = "../index.html";
      } else if ("admin@admin.com" === mail.value && "admin" === pass.value) {
        window.location.href = "../screens/admin/adminProducts.html";
      } else {
        console.log("usuario y pass no existentes");
      }
    });
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
});
