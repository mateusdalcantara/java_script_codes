const nome = "teus";
const sobrenome = "mat";
const idade = "2000";
const peso = 5000;
const altura = 1.99;
let imc = peso / (altura * altura);
let anoDeNascimento = 99 / 99 / 9999;

//sem template string
console.log(
  "Meu nome é " +
    nome +
    " e meu sobrenome é " +
    sobrenome +
    " tenho " +
    idade +
    " anos, peso " +
    peso +
    " quilos, sou alto com meus " +
    altura +
    " meu imc é " +
    imc +
    " e meu aniversário é " +
    anoDeNascimento
);

console.log();
console.log("***************");
console.log("Com template string:");

//com template string
console.log(
  `  Meu nome é ${nome}
  e meu sobrenome é ${sobrenome}
  tenho ${idade}
  anos, peso ${peso}
  quilos, sou alto com meus ${altura}
  meu imc é ${imc} e meu aniversário é 
  ${anoDeNascimento}`
); //é a forma mais legivel no JS
