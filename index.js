document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Número de diapositivas visibles
    spaceBetween: 10, // Espacio entre diapositivas
    navigation: {
      nextEl: '.swiper-button-next', // Selector del botón siguiente
      prevEl: '.swiper-button-prev', // Selector del botón anterior
    },
  });
});



  // Set the date we're counting down to (replace with your desired end date)
  const countDownDate = new Date("Oct 19, 2023 00:00:00").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML = "Oferta caducada.";
    }
  }, 1000);

  function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }