
const numeroIngresado = +prompt("Ingresa un número del 1 al 20");

let validar = (x) => {
    if (x <= 20 && (x >= 1)) {
        let numero = x;
        for (i = 1; i <= numero; i++) {
            let resultado = numero * i;
            document.write(numero + " x " + i + " = " + resultado + "<br>" )
        }

        for (let i = 1; i <= x; i++) {
            let res = 1;
            for (let j = 1; j <= i; j++) {
                res = res * j;
            }
            document.write("Factorial de " + i + " es : " + res + "<br>")
        }
    } else {
        alert("Número fuera del rango")
    }
};

validar(numeroIngresado)