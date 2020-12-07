// Ejercicio 1
/*
Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.
En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.
Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.
El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño.
*/


function getPrimes(min, max) {
    if(min > max){
        const aux = max
        max = min
        min = aux 
    }
    const primes = [];
    for (let i = min; i <= max; i++) {
        let isPrime = true;
        for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
            if(i%j === 0) isPrime = false;
        }
        if(isPrime && !primes.includes(i) && i > 1) primes.push(i);
    }
    return primes;
}

getPrimes(0, 10)