const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//continue ele vai até o final.
//break ele não executa mais nada adiante.

for (let numero of numeros) {
  //dentro do array de numeros

  if (numero === 2) {
    //conte de um até 10 retirando o numero 2
    continue; //pula para proxima iteração do laço
  }
  if (numero === 3) {
    //retire o 3 na contagem
    continue;
  }

  if (numero === 4 || numero === 5) {
    console.log("Pulei o numero 4 e numero 5");
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("Encontrei o 7 pulando fora")
    break;
  }
}
