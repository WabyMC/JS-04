let filanombres = ["Sofía","David","Juan"];
console.log("Parte 1");

console.log(filanombres);
filanombres.push("Sara");
filanombres.push("Agustín");
filanombres.shift();
console.log("Parte 2");

console.log(filanombres);
filanombres.splice(1,0,"Renata");
filanombres.push("Elena");
console.log("Parte 3");
console.log(filanombres);

console.log("Ejercicio 2");
var punto = "";
for (var i = 0; i <= 4; i++) {
    punto += "*"
    console.log(punto);
}


console.log("Ejercicio 3 P1");
var xvalue = 10;
var dism = 0.5;

while(xvalue > 0){
    xvalue -= dism;
    console.log(xvalue);
}


console.log("Ejercicio 3 P2");
var inicio = 0;
while( inicio < 100){
    inicio++;
    if(inicio%2!=0){
        console.log(inicio);
    }
}

console.log("Ejercicio 3 P3");
var imprimir = 6;
var valor = 0;
while(valor < imprimir){
    valor++;
    console.log("["+valor+"]");
}

console.log("Ejercicio 3 P4");
var n = 10;
var valor = 0;
var suma = 0;
while(valor < n){
    valor++;
    suma += valor;
    console.log(suma);
}