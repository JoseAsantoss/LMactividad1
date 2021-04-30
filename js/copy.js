fecha = () => {
    const elem = document.getElementById('copy');
    let content = elem.innerHTML;

    let anio = new Date().getFullYear();

    console.log(anio);

    elem.innerHTML = (content + '&copy 2021 - ' +  + '. Todos los derechos reservados');

    console.log(elem.innerHTML = content + ('&copy 2021 - ' + anio + '. Todos los derechos reservados'));

    addEventListener('load', fecha);
}





