function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDay());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

//se eu quiser um data positiva número acima de zero, ao contrário é verdadeiro
// const data = new Date(0); 31 1969 21:00:00 GMT -0300
// console.log(data.toString());

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());

//mes no js começa do 0 e vai até 11 que é dezembro
//const data = new Date(2019, 3, 20, 15, 14, 27, 999); //ano/mes/dia/hora/minuto/segundo/milésimodesegundo
//console.log(data.toString());

// //se eu quiser um data positiva número acima de zero, ao contrário é verdadeiro
// const data = new Date("2019-04-20 20:20:59"); //mais utilizado
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1); //Mês começa do zero
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Minutos", data.getMinutes());
// console.log("Segundos", data.getSeconds());
// console.log("Milésimos de Segundo", data.getMilliseconds());
// console.log("Dia da semana", data.getDay()); // 0 - Domingom, 6 - Sábado
// console.log(data.toString());
// console.log(Date.now());//marco zero até hoje contado em milésimos de segundos
// //vai ter databases em js que vai ter os milésimos de segundo, você pega e converte para ver a data
