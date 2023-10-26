function crearServicio({ titulo, descripcion }) {
  return `
      <div class="servicio">
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
      </div>
  `;
}


function crearServicioConObjetos({ titulo, descripcion }) {
  const contenedorServicio = document.createElement("div");
  const parrafo = document.createElement("p");
  parrafo.innerText = descripcion;
  const heading = document.createElement("h3");
  heading.innerText = titulo;
  contenedorServicio.appendChild(heading);
  contenedorServicio.appendChild(parrafo);
  contenedorServicio.classList.add("servicio");
  return contenedorServicio;
}

const data = [
  {
    titulo: "Asesorias",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a. ",
  },
  {
    titulo: "Diseño",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a.",
  },
  {
    titulo: "Beneficios",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a.",
  },
  {
    titulo: "Cargas",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a.",
  },
  {
    titulo: "Mantemiento",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a.",
  },
  {
    titulo: "Construccion",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus in architecto optio quos dolor quas provident qui, quae unde eum eveniet, doloremque et enim corrupti corporis quaerat a.",
  },
];

const contenedor = document.querySelector(".contenedor");

for (servicio of data) {
  const { descripcion } = servicio;
  console.log(descripcion);
  const servicioHtml = crearServicioConObjetos(servicio);
  contenedor.appendChild(servicioHtml);

}


