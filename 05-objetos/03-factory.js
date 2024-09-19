function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
          console.log('Recuperando clave...');
        },
    };
}
  
let user1 = crearUsuario('Marco','marc@gmail.com');
let user2 = crearUsuario('Juanito','juanito@gmail.com');

console.log(user1, user2);