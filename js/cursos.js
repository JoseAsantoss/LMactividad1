$(document).ready(function(){
    $("article[class=curso]").click(function () {
        console.log("AAA");
        $(location).attr("href","formCursos.html");
    })
});