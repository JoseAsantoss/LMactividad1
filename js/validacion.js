//Esperamos que el DOM este listo
$(function() {
    //Inicializamos la validación del formulario
    //el formulario tiene el atributo nombre consulta
    $("form[name='consulta']").validate({
        //Reglas específicas de la validación
        rules: {
            nombre: "required",
            email: {
                required: true,
                email: true
            },
            texto: "required"
        },

        //Especificamos los mensajes de error
        messages: {
            nombre: "Por favor introduce tu nombre",
            email: "Por favor introduce una dirección de e-mail válida",
            texto: "Introduce la consulta que nos quieres realizar"
        },
        submitHandelr: function(form) {
            form.submit();
        }
    });
});