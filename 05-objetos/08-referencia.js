// let a = 1;
// let b = a;

// ++b;

// console.log(a, b);

// let a = {};
// let b = a;

// b.prop = 1;

// console.log(a, b);

// let a = 1;

// function n(n){
//     ++n;
// }

// n(a);
// console.log(a);

let a = { prop:1 };

function suma(n){
    n.prop++;
}

suma(a);
console.log(a);