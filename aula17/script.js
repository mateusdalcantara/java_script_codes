/*
Primitivos(imutáveis) - String, 
    number, 
    boolean, 
    undefined, 
    null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência a = "c" b = a = c c

const a = {
  nome: "Mateus",
  sobrenome: "Bedeguépio"
};
const b = a;
a.nome = "Mateus";
console.log(b); //nome: "Mateus", sobrenome: "Bedeguépio"


let a = [1, 2, 3];
let b = a;
console.log(a, b); // [1,2,3] [1,2,3]



let a = "A";
let b = a; // b recebe o valor de a
console.log(a, b); // A A

a = "outra coisa";
console.log(a, b)// outra coisa A
*/

//Strings são indexidas cada letra tem uma posição no vetor
//imutável
//let nome = "Cactus";
//nome[0] = "R";
//console.log(nome[0], nome); //C Cactus