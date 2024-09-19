let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito" }],
];


function toCollection(arr){
    lista = [];
    for(idx in arr){
        let elemento = arr[idx];
        lista[idx] = elemento[1];
        lista[idx].id = elemento[0];
     
    }

    return lista
}

let resultado = toCollection(pairs);
console.log(resultado);