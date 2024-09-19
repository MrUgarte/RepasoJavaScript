let array = [2, 57, 7, 15, -500 , -100, 55];

function getMenorMayor(array){
    menor = array[0];
    mayor = array[0];


    for(numero of array){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);