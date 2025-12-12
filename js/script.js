// ******************************* LIBRERÍA AOS ****************************
$(document).ready(function () {
  // Inicialización de AOS
  AOS.init({
    duration: 1500,
  });
});

// HOVER CON APARICIÓN DE TEXTO

$(".item").hover(function () {
  $(this).find(".item-description").fadeToggle(500);
});

/**
 * Número de imagen que se está presentando
 */
let indice = 1;

function setImagen() {
  let figures = $("#gallery > figure");
  let circles = $("#circles > div");

  figures.css("display", "none");
  circles.attr("class", "");

  figures.eq(indice - 1).css("display", "block");
  circles.eq(indice - 1).attr("class", "active");

  if (indice === figures.length) {
    indice = 1;
  } else {
    indice += 1;
  }
  //Se añade el temporización de 3s (3000ms)
  setTimeout(setImagen, 3000);
}

/**
 * Cuando se detecta que se ha cargado la página,
 * se muestra la primera imagen
 */
$(document).ready(function () {
  setImagen();
});

// CHART

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("chartMuseos").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "British Museum",
        "Tate Modern",
        "National Gallery",
        "V&A Museum",
        "Natural History Museum",
        "Science Museum",
      ],
      datasets: [
        {
          label: "Visitantes por año (en millones)",
          data: [5.9, 5.7, 5.2, 3.3, 4.1, 3.1],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

//  MENÚ RESPONSIVE

$(document).ready(function () {
  const hamburger = $("#hamburger");
  const navLinks = $("#nav-links");

  if (hamburger.length && navLinks.length) {
    // Menú hamburguesa: Abrir/Cerrar
    hamburger.click(function () {
      navLinks.toggleClass("active");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.find("a").click(function () {
      navLinks.removeClass("active");
    });
  }
});
