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
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "auto";
  const contenedor = document.getElementById(`contenedor${num}`);
  contenedor.classList.remove('mostrar');
  document.body.classList.remove('mostrar-fondo');
}
function mercado() {
 document.getElementsByClassName("boton")[0].style.pointerEvents = "none"
  document.getElementsByTagName("body")[0].style.opacity = "0.5s";
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "none";
  const contenedor = document.getElementById('contenedor1');
  contenedor.classList.add('mostrar');
  document.body.classList.add('mostrar-fondo');
}
function tictactoe() {
  document.getElementsByClassName("boton")[0].style.pointerEvents = "none"
  document.getElementsByTagName("body")[0].style.opacity = "0.5s";
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "none";
  const contenedor = document.getElementById('contenedor2');
  contenedor.classList.add('mostrar');
  document.body.classList.add('mostrar-fondo');
}
function multijugador() {
  document.getElementsByClassName("boton")[0].style.pointerEvents = "none"
  document.getElementsByTagName("body")[0].style.opacity = "0.5s";
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "none";
  const contenedor = document.getElementById('contenedor3');
  contenedor.classList.add('mostrar');
  document.body.classList.add('mostrar-fondo');
}
function tates() {
  document.getElementsByClassName("boton")[0].style.pointerEvents = "none"
  document.getElementsByTagName("body")[0].style.opacity = "0.5s";
  document.getElementsByClassName("image-curtain")[0].style.pointerEvents = "none";
  const contenedor = document.getElementById('contenedor4');
  contenedor.classList.add('mostrar');
  document.body.classList.add('mostrar-fondo');
}

function plusSlides1(n) {
  let slideIndex = 1;
  showSlides1(slideIndex += n);
}

function showSlides1(n) {
  let slides = document.querySelectorAll(".sli1 img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  let offset = (slideIndex - 1) * -25;
  document.querySelector(".slide-container sli1").style.transform = `translateX(${offset}%)`;
}
function plusSlides2(n) {
  let slideIndex = 1;
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  let slides = document.querySelectorAll(".sli2 img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  let offset = (slideIndex - 1) * -25;
  document.querySelector(".slide-container sli2").style.transform = `translateX(${offset}%)`;
}
function plusSlides3(n) {
  let slideIndex = 1;
  showSlides3(slideIndex += n);
}

function showSlides3(n) {
  let slides = document.querySelectorAll(".sli3 img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  let offset = (slideIndex - 1) * -25;
  document.querySelector(".slide-container sli3").style.transform = `translateX(${offset}%)`;
}
function plusSlides4(n) {
  let slideIndex = 1;
  showSlides4(slideIndex += n);
}

function showSlides4(n) {
  let slides = document.querySelectorAll(".sli4 img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  let offset = (slideIndex - 1) * -25;
  document.querySelector(".slide-container sli4").style.transform = `translateX(${offset}%)`;
}