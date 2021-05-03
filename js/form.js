const submitButton = document.getElementById('submit-btn');

let timeout = null;
let errors = {
    nombre: true,
    email: true,
    telefono: true,
    texto: true,
};

let errors2 = {
    nombre: true,
    apellidos: true,
    dni: true,
    email: true,
    telefono: true,
}

/*La expresión regular de nombre establece que
empiece por una letra mayúscula y sigan
entre 8 y 30 caracteres, mayúsculas o minúsculas
o _ y acabe por alguna de estas
(Entendemos que el usuario introduce nombre y apellidos)*/
const nomformatRegex = /^[A-Z]{1}[A-Za-z_]{2,30}$/;

/*Con la expresión regular del email, pretendemos que
sean válidos estos emails prototipo:
    test@patata.com
    very.common@patata.com
    disposable.style.email.with+symbol@patata.com
    other.email-with-hyphen@pa_tata.com
    fully-qualified-domain@patata_2.net
    user.name+tag+sorting@patata.org
    user_name_test@pata_12.es
*/

/*La primera parte tenga minúsculas, números, guiones, guiones bajos,
puntos o +, entre 3 y 25 caracteres;; arroba;; dominio con letras,
números o _ ;; y .com/.es/.org ... */
const mailformatRegex = /^[a-z0-9-_.+]{3,25}@[a-z0-9_]{2,12}.[a-z]{2,6}$/;

/*El teléfono empezará por 6,7,8,9 que son los números
prefijo usados en España, y tendrá otros 8 números, haciendo
un teléfono de 9 dígitos típico de España*/
const telformatRegex = /^[0-9/^[6|7|8|9]{1}[0-9]{8,8}$/;

const caja = document.querySelectorAll('input.sp-form, textarea.sp-form');

const caja2 = document.querySelectorAll('input');


for(i = 0; i<caja.length; i++){

    if(caja[i].name == 'nombre' || caja[i].name == 'email' || caja[i].name == 'telefono' || caja[i].name == 'texto') {
        const evento = caja[i];

        evento.addEventListener('keydown',
            function(event){
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    console.log('input ${evento.name} value: ', evento.value);
                }, 300);

                validation(evento);
            }
        );
    };

};

for(j=0; j<caja2.length; j++){
    
    if(caja2[j].name == 'nombre' || caja2[j].name == 'apellidos' || caja2[j].name == 'dni' || caja2[j].name == 'telefono' || caja2[j].name == 'email'){
        const evento2 = caja2[j];

        evento2.addEventListener(
            'keydown', 
            function(event){
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    console.log('input ${evento2.name} value: ', evento2.value);
                }, 300);
                console.log(evento2);
                validation(evento2);
            }
        )

    }
}


validation = (evento) => {

    if(evento.name == 'nombre'){
        if(!evento.value.match(nomformatRegex)){
            mostrarError(true, evento);
        }else{
            mostrarError(false, evento);
        }
               
    } 

    if(evento.name == 'apellidos'){
        if(!evento.value.match(nomformatRegex)){
            mostrarError(true, evento);
        }else{
            mostrarError(false, evento);
        }
               
    } 

    if(evento.name == 'dni'){
        /* if(!evento.value.match(nomformatRegex)){
            mostrarError(true, evento);
        }else{
            mostrarError(false, evento);
        } */
        mostrarError(false, evento);       
    } 

    if(evento.name == 'email'){
        if(!evento.value.match(mailformatRegex)){
            console.log('El e-mail no es correcto');
            mostrarError(true, evento);
        }else{
            console.log('El e-mail es correcto');
            mostrarError(false, evento);
        }
    }

    if(evento.name == 'telefono'){
        if(!evento.value.match(telformatRegex)){
            mostrarError(true, evento);
        }else{
            mostrarError(false, evento);
        }
        
    }

    if(evento.name == 'texto') {
        console.log(evento.value);
        
        if(evento.value.length < 50 || evento.value.length > 1000){
            mostrarError(true, evento);

        }else{
            mostrarError(false, evento);

        }
    }
    
    if(evento.name['texto']){
        submitControlador();
    }else{
        submitControlador2();
    }
    
    
};

mostrarError = (check, evento) => {
    if(check) {
        evento.classList.add('error');
        if(evento.name['texto']){
            errors[evento.name] = true;
        }else{
            errors2[evento.name] = true;
        }
    }else{
        evento.classList.remove('error');
        if(evento.name['texto']){
            errors[evento.name] = false;
        }else{
            errors2[evento.name] = false;
        }
    }
};

submitControlador = () => {
    console.log(errors);
    if(errors.nombre || errors.apellidos || errors.email || errors.telefono || errors.texto) {
        submitButton.toggleAttribute('disabled', true);
    }else{
        submitButton.toggleAttribute('disabled', false);
    };

}

submitControlador2 = () => {
    console.log(errors2);
    if(errors2.nombre || errors2.apellidos || errors2.dni || errors2.email || errors2.telefono) {
        submitButton.toggleAttribute('disabled', true);
    }else{
        submitButton.toggleAttribute('disabled', false);
    };
}

