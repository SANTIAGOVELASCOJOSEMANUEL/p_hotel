// Obtén referencias a los elementos del DOM
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Agrega un controlador de eventos para el botón de menú
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cierra el menú cuando se hace clic en un enlace
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
