muestraFecha = () => {
    let fecha = new Date();
    let año = fecha.getFullYear();

const fechaPie = document.getElementById('copy').innerHTML('&copy; Copyright 2021 - ' + año + '. Todos los derechos reservados.');

    return fechaPie;
};



