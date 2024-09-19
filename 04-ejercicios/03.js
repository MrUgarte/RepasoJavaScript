function getbyIdx(arr, idx){
    if( idx >= 0){
        for(let i = 0; i < arr.length; i++){
        
            if(i === idx){
                console.log("Se encontro el valor: indice recorrido", i, "IDX de busqueda", idx);
                return "Si existe la posicion dentro del array, variable del array: " + arr[i];
            }
            
        }
    } else{
        console.log("Indice tiene que ser mayor a 0")
    }

    return "No existe el valor buscado dentro del array";
}

let resultado = getbyIdx([1,2,3,4], -1);
console.log(resultado);