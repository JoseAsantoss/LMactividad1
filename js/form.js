const form = document.getElementById('formulario');
const submitButton = document.getElementById('submit-btn');

let timeout = null;
let errors = {
    nombre: true,
    email: true,
    telefono: true,
};

const nomformatRegex = /^[A-Z]{1}[A-Za-z_]{8,30}$/;

const mailformatRegex = /^[a-z0-9-_.+]{3,25}@[a-z0-9_]{2,12}.[a-z]{2,6}$/;

const telformatRegex = /^[0-9/^[6|7|8|9]{1}[0-9]{8,8}$/;

const caja = document.querySelectorAll('input.sp-form');

for(i = 0; i<caja.length; i++){

    if(caja[i].name == 'nombre' || caja[i].name == 'email' || caja[i].name == 'telefono') {
        const evento = caja[i];

        evento.addEventListener('keydown', function(event){
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log('input ${evento.name} value: ', evento.value);
            }, 300);

            validation(evento);
        });
    };
};

validation = (evento) => {

    if(evento.name == 'nombre'){
        if(evento.value != '' ){
            if(!evento.value.match(nomformatRegex)){
                mostarError(false, evento);
            }else{
                mostarError(true, evento);
            }
               
        }else{
            mostarError(true, evento);
        }
    } 

    if(evento.name == 'email'){
        if(evento.value != '' ){
            if(!evento.value.match(mailformatRegex)){
                mostarError(true, evento);
            }else{
                mostarError(false, evento);
            }
               
        }else{
            mostarError(true, evento);
        }
    }

    if(evento.name == 'telefono'){
        if(evento.value != ''){
            if(evento.value.length != 9 && !evento.value.match(telformatRegex)){
                mostarError(true, evento);
            }else{
                mostarError(false, evento);
            }
        }else{
            mostarError(false, evento);
        }
    }
    
    submitControlador();
};

mostarError = (check, evento) => {
    if(check) {
        evento.classList.add('error');
        errors[evento.name] = true;
    }else{
        evento.classList.remove('error');
        errors[evento.name] = false;
    }
};

submitControlador = () => {
    console.log(errors);
    if(errors.nombre || errors.email || errors.telefono) {
        submitButton.toggleAttribute('disabled', true);
    }else{
        submitButton.toggleAttribute('disabled', false);
    };

}






