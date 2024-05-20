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