function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name); // Nos devuelve el nombre de la funcion: Usuario
console.log(Usuario.length); // Nos devuelve la cantidad de argumentos que recibe

const U = Usuario;
let user = new U('Pedrito');
console.log(user);

function of(fn, arg){
    return new fn(arg);
}

console.log(of(U,"Maria"));

function returned(){
    return function(){
        console.log("Saludos desde la segunda funcion!!!");
    }
}

let saludo = returned();
saludo();