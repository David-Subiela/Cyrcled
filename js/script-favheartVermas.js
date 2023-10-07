/* CORAZON APARECE EN ROJO (INDIVIDUALMENTE, SEGÚN HACES CLICK) 
Y LA SELECCIÓN EN EL LOCALSTORAGE PARA MANTENERSE DURANT LA SESIÓN */

let favHeart = document.querySelectorAll(".change");

favHeart.forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.toggle("change-heart");

    const selectedElements = Array.from(favHeart).filter((element) =>
      element.classList.contains("change-heart")
    );
    const selectedIds = selectedElements.map((element) => element.id);
    localStorage.setItem("redHearts", JSON.stringify(selectedIds));
  });

  const storedIds = JSON.parse(localStorage.getItem("redHearts"));
  if (storedIds && storedIds.includes(section.id)) {
    section.classList.add("change-heart");
  }
});

/* APARECEN MÁS IMÁGENES AL HACER CLICK EN EL BOTÓN, VER MÁS (APARECEN EN BLOQUES DE 4)*/

let btnImg = document.querySelector(".btn-light");
let images = document.querySelectorAll(".dissapear");

let currentIndex = 0;
let blockSize = 0;

const mediaQuery = window.matchMedia("(max-width: 815px)");

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Ancho máximo de 815px alcanzado
    blockSize = 3;
  } else {
    // Ancho máximo de 815px no alcanzado
    blockSize = 4;
  }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);

btnImg.addEventListener("click", () => {
  for (let i = currentIndex; i < currentIndex + blockSize; i++) {
    if (i < images.length) {
      images[i].style.display = "block";
    }
  }
  currentIndex += blockSize;

  if (currentIndex >= images.length) {
    btnImg.style.display = "none";
  }
});
