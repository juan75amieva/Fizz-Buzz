/*FIZZBUZZ
Este codigo imprime los numeros del 1 al 100 ( ambos inclusive) en una nueva linea, cuando el numero es multiplo de 3
imprime en su lugar Fizz; cuando es multiplo de 5 imprime en su lugar Buzz y cuando es multiplo de los dos imprime Fizz Buzz*/




for (i = 1; i <= 100; i++) console.log(`${i % 3 ? '': 'Fizz'}${i % 5 ? '': 'Buzz'}` || i);