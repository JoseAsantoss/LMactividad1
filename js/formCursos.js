$(document).ready(function(){
    $("[type = cursoForm]").each(function(){
        console.log($(this))
        /*let divInterno = $(this).children("div")*/
        let divInterno = $(this)
        let imgCheck = divInterno.children(".imgCursoChecked")
        imgCheck.css( "display", "none")
        console.log(imgCheck)
    })
});

$("[type = cursoForm]").click(function () {
    let classDiv = $(this).attr("class");
    let div = $(this)
    /*let divInterno = div.children("div")*/
    let divInterno = div;
    let checkBox = div.children("input")
    let imgNoCheck = divInterno.children(".imgCurso")
    let imgCheck = divInterno.children(".imgCursoChecked")
    if(classDiv == "noSeleccionado"){
        $(this).attr("class", "seleccionado")
        console.log("Vamos a seleccionado")
        checkBox.prop('checked', true);
        imgNoCheck.css("display","none")
        imgCheck.css( "display", "")
    }else{
        $(this).attr("class", "noSeleccionado")
        console.log("Vamos a NOOOOO seleccionado")
        checkBox.prop('checked', false);
        imgNoCheck.css("display","")
        imgCheck.css( "display", "none")
    }
})

$("input[type=radio][name=formacion-previa]").change(function() {
    console.log(this.value)
    let divFormacion = $("#otraFormacion")
    let cajaFormacion = divFormacion.children("#personal")
    if(this.value=="otros") {
        if(cajaFormacion.length == 0){
            console.log("Vamos a poner la caja")
            let caja = $('<input type="text" id="personal" name="detalleFormacion" placeholder="Indica tu formación">')
            caja.appendTo(divFormacion)
        }
    }else{
        console.log("Vamos a quitar la caja")
        $("#personal").remove()
    }
});
