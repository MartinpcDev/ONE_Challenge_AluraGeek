const datos = document.querySelector("[data-form]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");
const button = document.querySelector("#login__button");

document.addEventListener("DOMContentLoaded", () => {
  datos.addEventListener("submit", (event) => {
    event.preventDefault();
    const errorMsj = document.querySelector(".login__message-error");
    const emailData = email.value;
    const passwordData = password.value;

    if (emailData.lenght > 0 && passwordData.lenght > 0) {
      return true;
    } else {
      errorMsj.style.display = "block";
    }
  });
});
