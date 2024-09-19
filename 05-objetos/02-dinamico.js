const user = {id: 1};

user.name = "Marco"
user.guardar = function(){
    console.log("Guardando", user.name);
}
user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze({id: 1}); // No se puede ni agregar ni modificar las propiedades
user1.name = "Hola";
const user2 = Object.seal({id:2}); // No permite agregar pero si modificar sus propiedades
user2.name = "Juanito";
user2.id = 3;
console.log(user2);