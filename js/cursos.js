//Cuando el documento esté ready, 
$(document).ready(function(){
    //Y se haga click en un artículo, en cualquier parte
    $("article[class=curso]").click(function () {
        //Llevaremos al usuario al formulario completo
        $(location).attr("href","formCursos.html");
    })
});