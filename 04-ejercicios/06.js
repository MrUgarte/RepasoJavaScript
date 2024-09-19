let array = [2, 57, 7, 15, -500 , -100, 55, 8, 7];

function cantidadNumerosPositivos(array){
    cantidad = 0;
    for(numero of array){
        if(numero > 0){
            cantidad ++;
        }
    }

    return cantidad;
}

let numeros = cantidadNumerosPositivos(array);
console.log(numeros);