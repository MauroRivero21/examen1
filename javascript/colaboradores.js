function crearColaboradores({ titulo, descripcion, imagen }) {
  return `
      <div class="colaboradores">
          <h3>${titulo}</h3>
          <img class="imagen__colaboradores" src="${imagen}" alt="${titulo}" >
          <p>${descripcion}</p>
      </div>
  `;
}



function crearColaboradoresConObjetos({ titulo, descripcion, imagen }) {
  const contenedorColaboradores = document.createElement("div");
  const imagenElement = document.createElement("img"); 
  imagenElement.src = imagen; 
  imagenElement.classList.add("imagen__colaboradores");
  const parrafo = document.createElement("p");
  parrafo.innerText = descripcion;
  const heading = document.createElement("h3");
  heading.innerText = titulo;

  contenedorColaboradores.appendChild(imagenElement); 
  contenedorColaboradores.appendChild(heading);
  contenedorColaboradores.appendChild(parrafo);
  contenedorColaboradores.classList.add("colaboradores");
  return contenedorColaboradores;
}


const colaboradoresData = [
  {
    titulo: "Daniel",
    descripcion: "Especialista en diseño",
    imagen: "../img/pngwing.com.png",
  },
  {
    titulo: "Juan",
    descripcion: "Analista de estructuras",
    imagen: "../img/pngwing.com2.png",
  },
  {
    titulo: "Oscar",
    descripcion: "Ingeniero residente",
    imagen: "../img/pngwing.com3.png",
  },
];

const contenedor__colaboradores = document.querySelector(
  ".contenedor__colaboradores"
);

for (const colaborador of colaboradoresData) {
  const colaboradoresHtml = crearColaboradoresConObjetos(colaborador);
  contenedor__colaboradores.appendChild(colaboradoresHtml);
}

