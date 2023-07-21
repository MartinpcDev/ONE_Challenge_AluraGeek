const validacion = (input) => {
  const tipoInput = input.dataset.tipo;
  console.log(tipoInput);
  console.log(input.parentElement.parentElement);
  console.log(input.validity.valid);
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container-invalid");
    input.parentElement.parentElement.querySelector(
      ".input-message-error"
    ).innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container-invalid");
    input.parentElement.parentElement.querySelector(
      ".input-message-error"
    ).innerHTML = mostrarMensajeDeError(tipoInput, input);
    console.log(mostrarMensajeDeError(tipoInput, input));
    input.parentElement.parentElement.querySelector(
      ".input-message-error"
    ).style.display = "block";
  }
};

const tipoErrores = ["valueMissing", "typeMismatch"];

const mensajesDeError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
  },
  enlace: {
    valueMissing: "Este campo no puede estar vacio",
  },
  precio: {
    valueMissing: "Este campo no puede estar vacio",
  },
  categoria: {
    valueMissing: "Este campo no puede estar vacio",
  },
  descripcion: {
    valueMissing: "Este campo no puede estar vacio",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacio",
  },
  email: {
    valueMissing: "Este campo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  password: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch:
      "Al menos 4 caracteres , maximo 6,no puede contener carateres especiales",
  },
};

function mostrarMensajeDeError(tipoInput, input) {
  let mensaje = "";
  tipoErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoInput][error];
    }
  });
  return mensaje;
}

export const valida = {
  validacion,
};
