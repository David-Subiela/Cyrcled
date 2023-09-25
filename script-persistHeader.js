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
const quienSomos = document.querySelector(".encab-somos");
const apareceCarro = document.querySelector(".carro-compra-oculto");

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    esconderIconos.style.display = "flex";
    esconderLogo.style.width = "150px";
    esconderLogo.style.marginLeft = "20px";
    esconderLogo.style.marginTop = "10px";
    apareceEncab.style.justifyContent = "space-around";
    apareceMenu.style.display = "none";
    quienSomos.style.display = "flex";
    apareceCarro.style.display = "none";
  } else {
    esconderIconos.style.display = "none";
    esconderLogo.style.width = "100px";
    esconderLogo.style.marginLeft = "75px";
    esconderLogo.style.marginTop = "13px";
    esconderLogo.style.width = "100px";
    apareceEncab.style.justifyContent = "space-between";
    apareceMenu.style.display = "flex";
    quienSomos.style.display = "none";
    apareceMenu.style.gap = "67px";
    apareceCarro.style.display = "flex";
  }
});

/* --------------------------------------------------------- */
/*       MEDIA QUERIES EN JAVASCRIPT
/* --------------------------------------------------------- */

/* HACER CLICK EN EL BOTON Y QUE EL FONDO SE PONGA OSCURO: */

/* document.getElementById("btn_menu").addEventListener("click", function () {
  document.getElementById("overlay").classList.toggle("active");
});
 */
/* const clickElement = document.getElementById("btn_menu");
const changeBody = document.querySelector("body"); */
/* 
clickElement.addEventListener("click", () => {
  changeBody.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}); */

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
