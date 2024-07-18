let num1 = 0.7;
let num2 = 0.1;

//JS segue esse padrão para precisão dos numeros
//ieee 754-2008

//num1 = (num1 * 100 + num2 * 100) / 100;  // 0.8
//num1 = (num1 * 100 + num2 * 100) / 100;  // 0.9
//num1 = (num1 * 100 + num2 * 100) / 100;  // 1

//cuidado com as inprecisoes
//num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));//mostrar as casas de cimais
console.log(Number.isInteger(num1));

//num1 += num2;

//console.log(num1 + num2);

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2));
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));
//console.log(Number.isNaN(temp));
//let temp = num1 * "5"; //não é boa prática só testando funcionalidade
