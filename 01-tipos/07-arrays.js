let animales = ['Chanchito','Caballo'];
console.log(animales); // Obtenemos la lista completa 
console.log(animales[0]); // Obtenes solo el valor del indice, en este caso seria 'Chanchito'
animales[2] = 'Dragon'; // Estamos agregando un nuevo valor a la lista
animales[11] = 'Gato';
console.log(animales); // Obtenemos un array (12) ['Chanchito', 'Caballo', 'dragon', empty × 8, 'Gato']
console.log(typeof animales); // Nos imprime Object
console.log(animales.length); // Nos imprime 12

