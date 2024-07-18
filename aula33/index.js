//for clássico - com iteráveis (array ou strings)
//for in - retorna o indice ou chave (string, arrays ou objetos)
//for of - retorna o valor em si (iteráveis, arrays ou strings)

const pessoa = {
  //for in

  nome: "teus",
  idade: "idade",
};

for (let p in pessoa) {
  //for in

  console.log(p, pessoa[p]);
}

// console.log(pessoa.nome);//teus
// console.log(pessoa["nome"]);//teus

//////////////////////////////////////////

const nome01 = ["Balco"];

for (let a of nome01) {
  //for of
  console.log(a);//for off não é interável
}

///////////////////////////////////////////

nome01.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
