document.addEventListener('DOMContentLoaded', function() {

/*Datos recabados */
const inputnombre = document.getElementById('ingresa-nombre');
const inputmail = document.getElementById('ingresa-mail');
const inputcheck1 = document.getElementById('check-1');
const inputcheck2 = document.getElementById('check-2');
const inputcheck3 = document.getElementById('check-3');
const inputcheck4 = document.getElementById('check-4');
const inputcheck5 = document.getElementById('check-5');
const inputcheck6 = document.getElementById('check-6');

/*Puntero de botón */
const botonregform = document.getElementById('btn-form');

/*Info mostrada en Feedback*/
const NombreCard = document.getElementById('nombre-feedback');
const MailCard = document.getElementById('mail-feedback');

/*Modal*/
const modal = document.getElementById('modal');

/*Botones para cerrar modal*/
const btncerrar = document.getElementById('btn-cerrar');

/*Bajar hasta el formulario */
const btnbajar = document.getElementById('bajar-form');
const seccionform = document.getElementById('hasta-aca');

/*Scrollear hasta el form*/
btnbajar.addEventListener('click', function (e) {
    if (btnbajar) { // Check if the button exists
      seccionform.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Button 'btnbajar' not found!");
    }
  });

/*Cargar datos y abrir modal*/
botonregform.addEventListener('click', function () {
    console.log('Botón de registro del formulario clickeado');
    const nombre = inputnombre.value
    const email = inputmail.value
    console.log(`Nombre: ${nombre}, Email: ${email}`);
    NombreCard.textContent = nombre;
    MailCard.textContent = email;
    document.body.classList.add("jw-modal-open");
    e.preventDefault();
});


/*Vaciar campos luego de cerrar*/
btncerrar.addEventListener('click', function (e) {
    console.log('Botón de cerrar el modal clickeado');
    document.getElementById('modal').classList.add("open");
    document.body.classList.remove("jw-modal-open");
    inputnombre.value = ''
    inputmail.value = ''
    inputcheck1.value = ''
    inputcheck2.value = ''
    inputcheck3.value = ''
    inputcheck4.value = ''
    inputcheck5.value = ''
    inputcheck6.value = ''
});

});