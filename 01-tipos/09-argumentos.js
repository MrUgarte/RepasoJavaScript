function suma(a,b){
    console.log(arguments); // Me retorna una lista de argumentos que no estan contemplados en los parametros
    return a + b;
}

let resultado = suma(5, 6, 5, 7, 8, 3);
console.log(resultado);
console.log(typeof suma); // Es de tipo function