let indiceSlide = 0;
mostrarSlides(indiceSlide);

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let puntos = document.getElementsByClassName("punto-carrusel");
    
    if(n < 1) {
        indiceSlide = slides.length;
    }
    /* Recorro las slides */
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    indiceSlide++;
    /* Si sobrepasa la longitud de slides, vuelva al índice 1 */
    if(indiceSlide > slides.length) {
        indiceSlide = 1;
    }
    /* Recorro los puntos para remplazar su clase y poder darles
       el efecto que quiero con la clase en CSS: .punto-activo */
    for(let i=0; i<puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" punto-activo", "");
    }

    slides[indiceSlide-1].style.display="block";
    puntos[indiceSlide-1].className += " punto-activo";
    /* Las slides irán cambiando cada 4 segundos */
    setTimeout(mostrarSlides, 3500);
}

/*
Código por si implanto el carrusel manual.
En principio lo dejo automático.

function sumaSlides(n) {
    mostrarSlides(indiceSlide += n);
}

function restaSlides(n) {
    mostrarSlides(indiceSlide -= n)
}
*/