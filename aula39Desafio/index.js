/*Escreva uma funcao que recebe um numero e retorne o seguinte:
Numero e divisivel por 3 = Fizz
Numero e divisivel por 5 = Buzz
Numero e divisivel por 3 e 5 = FizzBuzz
Numero NÃO e divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero e realmente um numero = Retorna o proprio numero
Use a funcao com numeros de 0 a 100
*/
function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

for (let index = 0; index <= 100; index++) {
  console.log(index, fizzBuzz(index));
}
