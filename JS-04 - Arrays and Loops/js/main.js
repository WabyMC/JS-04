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