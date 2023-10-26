const botonServicios = document.getElementById("boton-servicio");
const botonColaboradores = document.getElementById("boton-colaboradores");

botonServicios.addEventListener("click", function () {
  const seccionServicios = document.getElementById("servicios");

  seccionServicios.scrollIntoView({ behavior: "smooth" });
});

botonColaboradores.addEventListener("click", function () {
  const seccionColaboradores = document.getElementById("seccion-colaboradores");

  seccionColaboradores.scrollIntoView({ behavior: "smooth" });
});
