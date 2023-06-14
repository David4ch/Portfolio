let botones1 = document.getElementsByClassName("botones")[0];
let botones2 = document.getElementsByClassName("botones")[1];
function lmbd() {
  botones1.style.display = "flex";
  botones1.style.opacity = "1"
  botones2.style.display = "none";
}
function programacion() {
  botones1.style.display = "none";
  botones2.style.display = "flex";
  botones2.style.opacity = "1";
}
function cerrarTarjeta(num) {
  document.getElementsByClassName("boton")[0].style.pointerEvents = "auto";
  document.getElementsByClassName("boton")[0].style.backgroundColor = "#fff"
  document.getElementsByClassName("boton")[0].style.boxShadow = "6px 6px 12px #464646, -6px -6px 12px #d1cdcd"
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "auto";
  const contenedor = document.getElementById(`contenedor${num}`);
  contenedor.classList.remove('mostrar');
  document.body.classList.remove('mostrar-fondo');
}
function mostrarTarjeta(num) {
  document.getElementsByClassName("boton")[0].style.pointerEvents = "none"
  document.getElementsByClassName("boton")[0].style.backgroundColor = "#4a4848"
  document.getElementsByClassName("boton")[0].style.boxShadow = "none"
  document.getElementsByTagName("body")[0].style.opacity = "0.5s";
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "none";
  const contenedor = document.getElementById(`contenedor${num}`);
  contenedor.classList.add('mostrar');
  document.body.classList.add('mostrar-fondo');
}
/**CONTENEDOR 1 */
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli1")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1 - 1].style.display = "block";
}

/**CONTENEDOR 2 */
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli2")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2 - 1].style.display = "block";
}

/**CONTENEDOR 3 */
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli3")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3 - 1].style.display = "block";
}

/**CONTENEDOR 4 */
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function showSlides4(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli4")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex4 - 1].style.display = "block";
}
/**CONTENEDOR 5 */
let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function showSlides5(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli5")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex5 - 1].style.display = "block";
}

/**CONTENEDOR 6 */
let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function showSlides6(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli6")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex6 = 1;
  }
  if (n < 1) {
    slideIndex6 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex6 - 1].style.display = "block";
}
/**CONTENEDOR 7 */
let slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function showSlides7(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli7")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex7 = 1;
  }
  if (n < 1) {
    slideIndex7 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex7 - 1].style.display = "block";
}
/**CONTENEDOR 8 */
let slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function showSlides8(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli8")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex8 = 1;
  }
  if (n < 1) {
    slideIndex8 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex8 - 1].style.display = "block";
}
/**CONTENEDOR 9 */
let slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function showSlides9(n) {
  let i;
  const slides = document.getElementsByClassName("slide-container sli9")[0].getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex9 = 1;
  }
  if (n < 1) {
    slideIndex9 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex9 - 1].style.display = "block";
}