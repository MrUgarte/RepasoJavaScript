function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ // Metodo
        console.log("Recuperando Clave...");
    }
}

let usuario = new Usuario();
console.log(usuario);