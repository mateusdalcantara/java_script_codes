//desestruturação
//...rest, ...spread

const pessoa = {
  //objeto
  nome: "Teus",
  sobrenome: "Cactus",
  idade: 532532423,
  endereco: {
    rua: "Av Brasil",
    numero: 1337,
  },
};

const { nome, sobrenome, ...rest } = pessoa;
console.log(nome, rest);

//atribuição via deestruturação
// const { nome, idade, pedras = "não existe", sobrenome: teste } = pessoa;
// console.log(nome, /*sobrenome*/ teste, pedras);

// const {//1234 fica com valor padrão caso seja null ou undefined
//   endereco: { rua:r =1234, numero:n },
// } = pessoa;
// console.log(r, n);

// console.log(pessoa);
// console.log(pessoa.nome);
// const nome = pessoa.nome;
// console.log(nome);

// const numeros = [
//   [1, 2, 3],//lista1
//   [4, 5, 6],//lista2
//   [7, 8, 9],//lista3
// ];
// const [lista1, lista2, lista3] = numeros;
// console.log(lista3[2]);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco);
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

// const number = [
//   [1, 2, 3],//0;0;1;2
//   [4, 5, 6],//1;0;1;2
//   [7, 8, 9],//2;0;1;2
// ];

// console.log(number[0][2]);

// let a = "A";
// let b = "B";
// let c = "C";

// const letras = [b, c, a];
// [a, b, c] = letras; //desestruturação

// console.log(a, b, c);
