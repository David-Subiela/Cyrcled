const flechaArriba = document.querySelector(".flecha-arriba");
const seccionesDestino = document.querySelectorAll(".seccion-destino");

/* CUANDO CLICAS flechaArriba, VUELVES AL INICIO */
flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* NO APARECE BOTÓN FLECHA, CUANDO ESTÁS EN EL INICIO */
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

/* ----------------------------------------------------------------------------------------------*/
/* MODAL SUSCRIPCIÓN */
/* ----------------------------------------------------------------------------------------------*/
// Botón que abre el modal:
const resultadoBtn = document.getElementById("cancelar-suscri");
// Cuando el usuario hace click en el botón, se abre la ventana:
resultadoBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Ventana del modal:
const modal = document.getElementById("ventana-modal");
const modalNewslet = document.querySelector(".modal-newslet-completa");
// Hace referencia al elemento <span> que tiene la X, el cual cierra la ventana:
const span = document.getElementsByClassName("close")[0];
// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Hace referencia al botón OK / NO GRACIAS, el cual cierra la ventana:
const btnOK = document.querySelector(".btn-ok");
const btnNogracias = document.querySelector(".btn-nogracias");
// Si el usuario hace click en el botón OK / NO GRACIAS, la ventana se cierra
btnOK.addEventListener("click", () => {
  modal.style.display = "none";
});
btnNogracias.addEventListener("click", () => {
  modalNewslet.style.display = "none";
});

/* ----------------------------------------------------------------------------------------------*/
