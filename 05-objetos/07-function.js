function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibuja = function(){ console.log('Dibujando...');}
}

let punto = { z:7 };
// Punto.call(punto, 1, 2);
Punto.apply(punto,[1,2]);
console.log(punto);
// Constructor Function, crea funciones
// const Point = new Function('x','y',`
//     this.x = x;
//     this.y = y;
//     this.dibuja = function(){ console.log('Dibujando...');}
// `);

// const p = new Point(1, 2);
// console.log(p);