let longitud = 12;

function crearArray(n){
    lista = [];
    if(n > 0){
        for(let i = 0; i < n; i++){
            lista.push(i+1);
        }
        return lista;
    }else{
        return "El valor de longitud tiene que ser mayor a CERO";
    }    
}

let resultado = crearArray(longitud);
console.log(resultado);