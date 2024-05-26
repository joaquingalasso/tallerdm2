$(document).ready(function() {
    $('#close').hide();
    // Cuando se envía el formulario
    $('#formulario').submit(function(e) {
        // Obtenemos los valores de los campos
        let nombre = $('#ingresa-nombre').val();
        let email = $('#ingresa-mail').val();
        
        // Aquí puedes agregar acciones adicionales con los valores obtenidos
        console.log(nombre);
        console.log(email);

        // Muestra el mensaje y oculta el formulario
        $('.formMessage').show();
        // $('#formulario').hide();

        // Previene el envío tradicional del formulario
        e.preventDefault();
    });

    // Cuando se hace clic en el botón cerrar
    $("#close").click(function() {
        // Muestra el formulario y oculta el mensaje
        // $('#formulario').show();
        $('.formMessage').hide();

        // Limpia los valores de los campos del formulario
        $('#ingresa-nombre').val("");
        $('#ingresa-mail').val("");
        // Asegúrate de limpiar todos los campos que necesites
    });
});


// open modal by id
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});