function nombreResolucion(ancho, alto) {

    if (ancho >= 2560 && alto >= 1440) {
        return "QHD";
    } else if (ancho >= 1920 && alto >= 1080 ) {
        return "FHD";
    } else if (ancho >= 1280 && alto >= 720 ) {
        return "HD";
    } else {
        return false;
    }

}

let nombre = nombreResolucion(1920, 890);
console.log(nombre); 
