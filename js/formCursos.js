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
})