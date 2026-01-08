function sumarTS() {
    var n1 = document.getElementById('n1').valueAsNumber;
    var n2 = document.getElementById('n2').value;
    var resultado = (n1) + parseFloat(n2);
    document.getElementById('resultado').innerHTML = "El resultado es:" + resultado.toString();
}
//PRACTICA GENERAL DE LA SINTAXIS
var suma = 0;
var n1 = [1, 2, 4,];
//let lista:string|boolean|number|string[]=['hola'];
var n2 = 10;
n1.forEach(function (e) {
    suma = e + n2;
    console.log("número 1:" + e + "número 2:" + n2 + "=" + suma);
});
var multiplicacion = 1;
var listaNum = [2, 10, 19, 9, 78];
listaNum.forEach(function (e) {
    multiplicacion *= e;
    console.log("El número:" + e + " " + esPrimo(e));
});
console.log("La Multiplicación es:" + multiplicacion);
function esPrimo(n) {
    if (n <= 1)
        return "No es primo";
    if (n === 2)
        return "Es primo";
    var raiz = Math.sqrt(n);
    for (var i = 2; i <= raiz; i++) {
        if (n % i === 0) {
            return "No es primo";
        }
    }
    return "Es primo";
}
