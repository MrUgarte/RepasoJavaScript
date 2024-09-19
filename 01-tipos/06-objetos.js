// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime:"Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13; // Estamos cambiando el valor de una propiedad del objeto

let llave = "edad"; // Esto sirve por si no sabes bien el nombre de la propiedad y te quiere asegurar
personaje[llave] = 17;

delete personaje.anime; // Estamos borrando una propiedad del objeto, no el valor que contiene en si, si no la propiedad completa


console.log(personaje);