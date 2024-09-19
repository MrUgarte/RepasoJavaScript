function numerosImpares(numeros){
    for(i of numeros){
        if(i % 2 !== 0){
            console.log("impar", i);
        }
    }
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
numerosImpares(numeros);