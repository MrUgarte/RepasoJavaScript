let array = [
    { id: 1, name: "Juanito" },
    { id: 2, name: "Lucho" },
    { id: 3, name: "Maria" }
];

function toPares(arr){
    let lista=[];
    for(index in arr){
        lista[index] = [arr[index].id,arr[index] ];
    }

    return lista;
}

let resultado = toPares(array);
console.log(resultado);
