/*//Evento seleccionar ingrediente
function selecCurso(){
    let sel = false
    img.addEventListener("click", function () {
        if (sel == false) {
            this.setAttribute("style", "filter: brightness(55%) blur(2px);")
            sel = true
        } else {
            this.removeAttribute("style", "filter: brightness(55%) blur(2px);")
            sel = false
        }
}
*/

/*$("[class = labelCurso]").click(function () {
    console.log("A")
    let id = this.id
    if (id == "cursoNoSeleccionado") {
        console.log("Vamos a seleccionado")
        $(this).css({ filter: "brightness(50%) blur(2px)" })
        $(this).next("#checked").css({ visibility: "visible" })
        $(this).attr("id", "cursoSeleccionado")

    } else {
        console.log("Vamos a NOOOO seleccionado")
        $(this).css({ filter: "brightness(100%) blur(0px)" })
        $(this).next("#checked").css({ visibility: "hidden" })
        $(this).attr("id", "cursoNoSeleccionado")
    }
})*/

$("[name = cursoForm]").click(function () {
    console.log("A")
    let classDiv = $(this).attr("class");
    let div = $(this)
    console.log(div)
    let checkBox = div.children("input")
    console.log(checkBox)
    let imgLabel = div.children("label").children("img")
    console.log(imgLabel)
    let imgCheck = div.children("img")
    console.log(imgCheck)
    if(classDiv == "noSeleccionado"){
        $(this).attr("class", "seleccionado")
        console.log("Vamos a seleccionado")
        checkBox.prop('checked', true);
        imgLabel.css({ filter: "brightness(50%) blur(2px)" })
        imgCheck.css({ visibility: "visible" })
    }else{
        $(this).attr("class", "noSeleccionado")
        console.log("Vamos a NOOOOO seleccionado")
        checkBox.prop('checked', false);
        imgLabel.css({ filter: "brightness(100%) blur(0px)" })
        imgCheck.css({ visibility: "hidden" })
    }
    /*
    if (classDiv == "noSeleccionado") {
        $(this).attr("class", "seleccionado")
        console.log("Vamos a seleccionado")
        checkBox.prop('checked', true);
        imgLabel.css({ filter: "brightness(50%) blur(2px)" })
        imgCheck.css({ visibility: "visible" })

    } else {
        $(this).attr("class", "noSeleccionado")
        console.log("Vamos a NOOOO seleccionado")
        $(this).css({ filter: "brightness(100%) blur(0px)" })
        $(this).next("#checked").css({ visibility: "hidden" })
        $(this).attr("id", "cursoNoSeleccionado")
    }*/
})