

// hosting com var, ele procura a variavel pelo código
console.log(sobrenome);//undefined
var sobrenome = "Catatau";//

// var sobrenome = "Dav";
// //variável foi declarada fora da função e mesmo assim funciona
// function falaOi() {
//   console.log(sobrenome);
// }
// falaOi();//função procura no enclosure(vizinhos) a variável

// function falaOi(){//se eu colocar o console.log fora não funciona porque nome está declarada dentro da função
//   var nome = "Teus";
//   console.log(nome);
// }
// falaOi();

//const verdadeiro = true;
//let tem escopo de bloco {... bloco}
//var só tem escopo de função
//a diferença do var e let é o escopo

// let nome = "Teus";
// var nome2 = "Teus";

// if (verdadeiro) {
//   let nome = "Teus";
//   var nonome2 = "Dav"; //redeclarando

//   if (verdadeiro) {
//     var nome2 = "Mat";
//     let nome = "Uma outra coisa qualquer";
//   }
// }

// console.log(nome, nome2);
