
const numeroIngresado = +prompt("Ingresa un número del 1 al 20");

let validar = (x) => {
    if (x <= 20 && (x >= 1)) {
        let numero = x;
        for (i = 1; i <= numero; i++) {
            let resultado = numero * i;
            console.log(numero + " x " + i + " = " + resultado)
        }

        for (let i = 1; i <= x; i++) {
            let res = 1;
            for (let j = 1; j <= i; j++) {
                res = res * j;
            }
            console.log("Factorial de " + i + " es : " + res)
        }
    } else {
        alert("Número fuera del rango")
    }
};

validar(numeroIngresado)