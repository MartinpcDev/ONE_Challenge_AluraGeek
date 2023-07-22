const listaProductos = async () => {
  const respuesta = await fetch(
    "https://64ae2aadc85640541d4c952f.mockapi.io/productos"
  );
  return await respuesta.json();
};

const detalleProducto = async (id) => {
  const respuesta = await fetch(
    `https://64ae2aadc85640541d4c952f.mockapi.io/productos/${id}`
  );
  return await respuesta.json();
};

const allProductsCategoria = async (categoria) => {
  const respuesta = await fetch(
    `https://64ae2aadc85640541d4c952f.mockapi.io/productos?categoria=${categoria}`
  );
  return await respuesta.json();
};

const deleteProducto = async (id) => {
  const respuesta = await fetch(
    `https://64ae2aadc85640541d4c952f.mockapi.io/productos/${id}`,
    {
      method: "DELETE",
    }
  );
  return respuesta;
};

const crearProducto = async (imageUrl, name, price, categoria, description) => {
  try {
    const respuesta = fetch(
      "https://64ae2aadc85640541d4c952f.mockapi.io/productos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          name,
          price,
          categoria,
          description,
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

const updateProducto = async (
  imageUrl,
  name,
  price,
  categoria,
  description,
  id
) => {
  try {
    const respuesta = await fetch(
      `https://64ae2aadc85640541d4c952f.mockapi.io/productos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          name,
          price,
          categoria,
          description,
          id,
        }),
      }
    );
    return respuesta;
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

const mostrarProducto = (imageUrl, name, price, categoria, description, id) => {
  const cardProducto = document.createElement("div");
  cardProducto.classList.add("product__card");
  const contenido = `
    <div class="product__card-edit hidden ">
        <button class="btnDelete" type="button" id="${id}" data-delete><img src="/assets/images/delete.svg" alt="edition_icon" class="iconEdit"></button>
        <a href="editProduct.html?id=${id}"><img src="/assets/images/edit.svg" alt="edition_icon" class="iconEdit" data-edit></a>
    </div>
    <div class="imgContainer">
        <img class="product__card--img" src = "${imageUrl}" alt = "imagen_del_producto">
    </div>
    <div class="product__card--info">
        <p class="product__card--title">${name}</p>
        <p class="product__card--price">${price}</p>
        <a href="/screens/viewProducts.html?id=${id}"  class="product__card-boton" data-verProducto>Ver producto</a>
    </div>
    `;

  cardProducto.innerHTML = contenido;

  const botonDelete = cardProducto.querySelector("[data-delete]");

  botonDelete.addEventListener("click", async () => {
    const id = botonDelete.id;
    console.log(id);
    await deleteProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
        location.reload();
      })
      .catch((error) => console.log("Ocurrio un error", error));
  });

  return cardProducto;
};

export const productoServicios = {
  listaProductos,
  detalleProducto,
  allProductsCategoria,
  mostrarProducto,
  crearProducto,
  deleteProducto,
  updateProducto,
};
