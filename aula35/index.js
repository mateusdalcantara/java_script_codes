console.log("/////////////////////////////");

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("/////////////////////////////");

const nome = "Teus";
let a = 0;

while (a < nome.length) {
  console.log(nome[a]);
  a++;
}
console.log("De cima para baixo, vai executando...");

console.log("/////////////////////////////");

do {
  console.log(rand);
} while (rand !== 10);