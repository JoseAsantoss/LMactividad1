/* Función para desplegar el menú con el icono */
function despliega() {
    let menu = document.getElementById("menu");
    if(menu.className === "nav") {
        menu.className += " responsivo";
    } else {
        menu.className = "nav";
    }
}

/* Función para desplegar y ocultar el desplegable del menú */
function muestraDesplegable() {
    let desplegable = document.getElementById("desp");
    let contenido = document.getElementById("desp-cont");
    if(contenido.className === "desp-contenido") {
        contenido.style.display = "block";
        contenido.className += " desplegado";
    } else {
        contenido.style.display = "none";
        contenido.className = "desp-contenido";
    }    
}