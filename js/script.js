// ******************************* LIBRERÍA AOS ****************************
$(document).ready(function () {
  // Inicialización de AOS
  AOS.init({
    duration: 1500,
  });
});

// ************************* HOVER CON APARICIÓN DE TEXTO *******************

$(".item").hover(function () {
  $(this).find(".item-description").fadeToggle(500);
});

// *********************** CARRUSEL DE IMÁGNES ************************
/**
 * Número de imagen que se está presentando
 */
let indice = 1;

/**
 * Presenta la imagen que corresponda a partir del índice.
 * Además, tiene un temporizador de 3s para mostrar la
 * siguiente imagen
 */
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

// *********************************** GRÁFICO *********************************
/**
 * Función para generar el gráfico de línea
 */
function cargaGraficoLinea() {
  var datos = {
    labels: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sept",
      "oct",
      "nov",
      "dic",
    ],
    datasets: [
      {
        label: "2022",
        backgroundColor: "black",
        borderColor: "black", // Color del borde para que sea una línea
        fill: false, // Desactiva el relleno bajo la línea
        data: [
          500, 1000, 1500, 2000, 2500, 3000, 3500, 3000, 2000, 2500, 3000, 2800,
        ],
      },

      {
        label: "2023",
        backgroundColor: "rgba(224, 127, 137, 1)",
        borderColor: "rgba(224, 127, 137, 1)",
        fill: false,
        data: [
          1000, 2000, 2500, 3000, 3500, 4000, 3500, 3000, 2500, 2700, 3200,
          3000,
        ],
      },
    ],
  };

  var grafico = $("#linea");
  new Chart(grafico, {
    type: "line",
    data: datos,
  });
}

$(document).ready(function () {
  "use strict";

  if ($("#linea").length) {
    cargaGraficoLinea();
  }
});

// ********************************** VALIDACIÓN FORMULARIO CORREO ELECTRÓNICO *********************

$(document).ready(function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón básico para correos

  // Escucha del evento input en el campo de correo
  $("#email").on("input", function () {
    const email = $(this).val().trim();

    if (emailRegex.test(email)) {
      $(this).removeClass("invalid").addClass("valid"); // Borde verde
      $("#error-email").hide(); // Ocultar el mensaje de error
    } else {
      $(this).removeClass("valid").addClass("invalid"); // Borde rojo
      $("#error-email").show(); // Mostrar el mensaje de error
    }
  });

  // Validación final al enviar el formulario
  $("#miFormulario").on("submit", function (e) {
    const email = $("#email").val().trim();

    if (!emailRegex.test(email)) {
      e.preventDefault(); // Evitar el envío si el correo es inválido
      alert("Por favor, corrige el correo antes de enviar.");
    }
  });
});

// ******************************************* MENÚ RESPONSIVE *****************************

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
