/* MENU HAMBURGUESA MOSTRAR / OCULTAR: */

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu() {
  nav.style.left = "0px";
  background_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.left = "-550px";
  background_menu.style.display = "none";
}
