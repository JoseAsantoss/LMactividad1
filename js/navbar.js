/* Función para desplegar el menú con el icono */
function despliega() {
    let menu = document.getElementById("menu");
    if(menu.className === "nav") {
        menu.className += " responsivo";
    } else {
        menu.className = "nav";
    }
}