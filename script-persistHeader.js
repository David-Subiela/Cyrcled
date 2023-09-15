/* ---------------------------------------------------------- */
/*       ENCABEZADO FIJO (PERSISTENT HEADER)
/* ---------------------------------------------------------- */

let menu = document.getElementById("encabezado-completo");
let altura = menu.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY > altura) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
});

/* ------------------------------------------------------------------------ */
/*       DESAPARECE MENU E ICONOS, SI ENCABEZADO PERSISTENTE, SINO NO
/* ------------------------------------------------------------------------ */

const esconderIconos = document.querySelector(".nav-icons");
const esconderLogo = document.querySelector(".cyrcled-logo");
const apareceMenu = document.querySelector(".menu-appear");
const apareceEncab = document.querySelector(".encabezado");
const apareceCarro = document.querySelector(".carro-compra-oculto");

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    esconderIconos.style.display = "flex";
    esconderLogo.style.width = "150px";
    apareceEncab.style.justifyContent = "space-around";
    apareceMenu.style.display = "none";
    apareceCarro.style.display = "none";
  } else {
    esconderIconos.style.display = "none";
    esconderLogo.style.width = "100px";
    apareceEncab.style.justifyContent = "space-between";
    apareceMenu.style.display = "flex";
    apareceMenu.style.gap = "67px";
    apareceCarro.style.display = "flex";
  }
});

/* --------------------------------------------------------- */
/*       MEDIA QUERIES EN JAVASCRIPT
/* --------------------------------------------------------- */

/* const apareceEncabMQ = matchMedia("(max-width: 428px)");
const changeSize = (mql) => {
  if (mql.matches) {
    apareceEncab.style.justifyContent = "inherit";
    esconderLogo.style.width = "65px";
  } else {
    apareceEncab.style.justifyContent = "inherit";
    esconderLogo.style.width = "65px";
  }
};

apareceEncabMQ.addEventListener("change", changeSize);
changeSize(apareceEncabMQ); */

/* ----------------------------------------------------- */
/*       MODIFICACIÓN MENU HAMBURGUESA
/* ----------------------------------------------------- */

/* const mainMenu = document.querySelector(".main-menu");

mainMenu.addEventListener("click", () => {}); */
