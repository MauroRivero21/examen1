function crearModal() {
  return `
      <div class="contenedor-modal">
          <div class="modal">
              <h2>Confirmación</h2>
              <p>¿Está seguro que desea ver las demás secciones?</p>
              <button id="boton-aceptar">Aceptar</button>
              <button id="boton-cancelar">Cancelar</button>
          </div>
      </div>
  `;
}


const botonVerMas = document.getElementById("ver-mas-btn");
botonVerMas.addEventListener("click", () => {

  document.body.insertAdjacentHTML("beforeend", crearModal());


  const modal = document.querySelector(".contenedor-modal");
  const botonAceptar = document.getElementById("boton-aceptar");
  const botonCancelar = document.getElementById("boton-cancelar");


  botonAceptar.addEventListener("click", () => {

    modal.remove();


    const botonServicios = document.querySelector(".boton-servicio");
    const botonColaboradores = document.querySelector(".boton-colaboradores");
    botonServicios.style.display = "inline-block";
    botonColaboradores.style.display = "inline-block";


    const seccionDos = document.querySelector(".section__servicios");
    const seccionTres = document.querySelector(".section__colaboradores");
    seccionDos.style.display = "block";
    seccionTres.style.display = "block";

    botonVerMas.style.display = "none";
  });


  botonCancelar.addEventListener("click", () => {

    modal.remove();
  });
});
