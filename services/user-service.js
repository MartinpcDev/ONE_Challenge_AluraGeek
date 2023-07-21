const getUsuarios = async () => {
  const respuesta = await fetch(
    "https://64ae2aadc85640541d4c952f.mockapi.io/users"
  );
  return await respuesta.json();
};

const deleteUsuarios = async (id) => {
  const respuesta = await fetch(
    `https://64ae2aadc85640541d4c952f.mockapi.io/users/${id}`,
    {
      method: "DELETE",
    }
  );
  return respuesta;
};

const detalleCliente = async (id) => {
  const respuesta = await fetch(
    `https://64ae2aadc85640541d4c952f.mockapi.io/users/${id}`
  );
  return await respuesta.json();
};

const updateUsuario = async (name, email, password, id) => {
  try {
    const respuesta = await fetch(
      `https://64ae2aadc85640541d4c952f.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    return respuesta;
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

const crearUsuario = async (name, email, password) => {
  try {
    const respuesta = fetch(
      "https://64ae2aadc85640541d4c952f.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          id: uuid.v4(),
        }),
      }
    );

    if ((await respuesta).ok) {
      return (await respuesta).body;
    }
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

const mostrarUsuario = (name, email, password, id) => {
  const tr = document.createElement("tr");
  const contenido = `
                <th>${name}</th>
                <th>${email}</th>
                <th>${password}</th>
                <th><button class="btnDelete" type="button"><img src="/assets/img/icons/delete.svg" alt="edition_icon"
                            class="iconEdit" id="${id}" data-delete></button>
                <th><a href="../screens/edit-usuario.html?id=${id}"><img src="/assets/img/icons/edit.svg" alt="edition_icon"
                            class="iconEdit" data-edit></a></th>`;
  tr.innerHTML = contenido;
  const botonDelete = tr.querySelector("[data-delete]");

  botonDelete.addEventListener("click", () => {
    const id = botonDelete.id;
    console.log(id);
    deleteUsuarios(id)
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log("Ocurrio un error ", error));
  });
  return tr;
};

export const usuarioServicios = {
  getUsuarios,
  mostrarUsuario,
  detalleCliente,
  deleteUsuarios,
  updateUsuario,
  crearUsuario,
};
