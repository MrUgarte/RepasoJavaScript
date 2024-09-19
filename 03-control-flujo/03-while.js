let i = 1;

while(i < 10){
    
    if(i % 2 == 0){
        console.log(i, "es un numero par!");
    }else{
        console.log(i, "es un numero impar!");
    }
    ++i
}

console.log("Estoy fuera del while");