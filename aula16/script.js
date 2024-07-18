const pessoa01 = { //Core do JS é Funcao, Objeto e Array
  nome: "Mateus ",
  sobrenome: "Rodrigues Alcantara",
  idade: "28",

  fala01() {
  console.log(`${this.nome} ${this.sobrenome} está falando: Virei um objeto no JS!`);
  },

  fala02(){
    console.log('Caramba, é assim que a AI enxerga!?');
  },

  aniversário(){
    this.idade++;
    console.log(`Vou fazer ${this.idade++}, no final do ano.`)
  },

  fala03(){
    console.log(`Tenho ${this.idade} anos de idade.`);
  },

  fala04(){
    console.log()
  }

};

pessoa01.fala01();
pessoa01.fala02();
pessoa01.fala03();
pessoa01.fala04();
pessoa01.aniversário();

// function criarPessoa(nome, sobreNome, idade) {

//   return {nome, sobreNome, idade};

//return {
//  nome: nome,
//  sobreNome: sobreNome,
//  idade: idade,
//};
// }

// const pessoa01 = criarPessoa('Gustavo', 'Macedo', 30)
// const pessoa02 = criarPessoa('Guilherme', 'Macedo', 35)
// const pessoa03 = criarPessoa('João', 'Monteiro', '75')
// const pessoa04 = criarPessoa('Joaquim', 'Simões', 90)

// console.log(pessoa04.nome, pessoa04.sobreNome, pessoa04.idade)

//const pessoa01 = {
//criando um objeto literal
//  nome: "Mateus",
//  sobrenome: "Mat",
//  idade: "28",
//};

//console.log("Nome: " + pessoa01.nome);
//console.log("Sobre nome: " + pessoa01.sobrenome);

//let array = [1, 2, 3];
//array.push(4);
//array[0] = 'Mateus';
//array = 'Outra';
//console.log(array);