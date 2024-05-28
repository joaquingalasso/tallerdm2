$(document).ready(function () {
  $("#close").hide();
  // Cuando se envía el formulario
  $("#formulario").submit(function (e) {
    // Obtenemos los valores de los campos
    let nombre = $("#ingresa-nombre").val();
    let email = $("#ingresa-mail").val();

    console.log(nombre);
    console.log(email);

    // Muestra el mensaje y oculta el formulario
    $(".formMessage").show();

    // Previene el envío tradicional del formulario
    e.preventDefault();
  });


  // Obtener Placeholders
var placeholder_nombre = document.getElementById("ingresa-nombre");
var placeholder_email = document.getElementById("ingresa-mail");


  // Cuando se hace clic en el botón cerrar
  $("#close").click(function () {
    // Muestra el formulario y oculta el mensaje
    // $('#formulario').show();
    $(".formMessage").hide();

    // Limpia los valores de los campos del formulario
    $("#ingresa-nombre").val("");
    $("#ingresa-mail").val("");
    // Asegúrate de limpiar todos los campos que necesites
  });
});

// open modal by id
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("jw-modal-open");
}

// close currently open modal
function closeModal() {
  document.querySelector(".jw-modal.open").classList.remove("open");
  document.body.classList.remove("jw-modal-open");
  $(".formMessage").hide();

  // Limpia los valores de los campos del formulario
  $("#ingresa-nombre").val("");
  $("#ingresa-mail").val("");
  // Asegúrate de limpiar todos los campos que necesites
}

window.addEventListener("load", function () {
  // close modals on background click
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("jw-modal")) {
      closeModal();
    }
  });
});
