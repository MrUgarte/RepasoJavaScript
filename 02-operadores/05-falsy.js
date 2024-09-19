// short-circuit
// A todos estos valores se les conoce como falsy
// Falso
// false
// 0 
// ''
// null 
// undefined
// NaN

let nombre = "MrUgarte";
let userName = nombre || "Anonimo";
console.log(userName);

function fn1(){
    console.log("Soy funcion 1");
    return false
}

function fn2(){
    console.log("Soy funcion 2");
    return true
}

let x = fn1() && fn2(); // En este caso solo se ejecuta la primera funcion, debido que es requerido para que se ejecute fn2