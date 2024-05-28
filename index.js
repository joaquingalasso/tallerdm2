/*obtenemos los datos que queremos del formulario */
const inputnick = document.getElementById('ingresa-nombre');
const inputemail = document.getElementById('ingresa-mail');
const inputcheck1 = document.getElementById('check-1');
const inputcheck2 = document.getElementById('check-2');
const inputcheck3 = document.getElementById('check-3');
const inputcheck4 = document.getElementById('check-4');
const inputcheck5 = document.getElementById('check-5');
const inputcheck6 = document.getElementById('check-6');

/*Puntero para el boton */
const botonregform = document.getElementById('btn-form');

/*lugar donde se va a cambiar la informacion */
const NombreCard = document.getElementById('nombre-feedback');
const MailCard = document.getElementById('mail-feedback');

/*obtenemos la tarjeta donde se vana  cambair los datos*/
const divtarjeta = document.getElementById('modal-1');


/*Botones para cerrar las tarjetas */
const Btncerrar = document.getElementById('btn-cerrar');

/*Bajar hasta el formulario */
const btnbajar = document.getElementById('bajar-form');
const seccionhasta = document.getElementById('hasta-aca');


/*Vamos a cambiar la clase  para que se vea la tarjeta, poner los valores extraidos del formulario y que se esconda al cerrarla*/
botonregform.addEventListener('click', function () {
    const nick = inputnick.value
    const mail = inputemail.value
    NombreCard.textContent = nick ;
    MailCard.textContent = mail;
    document.body.classList.add("jw-modal-open");
});


/*Limpiamos los campos despues de cerrar el popup*/
Btncerrar.addEventListener('click', function (e) {
    document.body.classList.remove("jw-modal-open");
    inputnick.value = ''
    inputemail.value = ''
    inputname.value = ''
    inputlastna.value = ''
    inputpass.value = ''
});

/*baja hasta la seccion del formulario*/
btnbajar.addEventListener('click', function (e) {
    seccionhasta.scrollIntoView({ behavior: 'smooth' })
});




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
