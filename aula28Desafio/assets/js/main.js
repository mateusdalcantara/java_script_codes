const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];
  return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[numeroMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaDate(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} as ` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  );
}
h1.innerHTML = criaDate(data);


//const h1 = document.querySelector(".container h1");
// const data = new Date();
// const options = { dateStyle: "full", timeStyle: "full" };
// h1.innerHTML = new Intl.DateTimeFormat("pt-BR", options).format(data);

// const opcoes = {
//   dateStyle: "full",
//   timeStyle: "short",
// };

// h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);

// const data = new Date();
// const h1 = document.querySelector(".container h1");
// //h1.innerHTML = "Só para ver"
// // h1.innerHTML = data.toString();

// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "segunda-feira";
//       break;
//     case 2:
//       diaSemanaTexto = "terça-feira";
//       break;
//     case 3:
//       diaSemanaTexto = "quarta-feira";
//       break;
//     case 4:
//       diaSemanaTexto = "quinta-feira";
//       break;
//     case 5:
//       diaSemanaTexto = "sexta-feira";
//       break;
//     case 6:
//       diaSemanaTexto = "sábado";
//       break;
//     default:
//       diaSemanaTexto = " ";
//   }
//   return diaSemanaTexto;
// }

// function getNomeMes(numeroMes) {
//   let nomeMes;

//   switch (numeroMes) {
//     case 0:
//       nomeMes = "janeiro";
//       return nomeMes;
//     case 1:
//       nomeMes = "fevereiro";
//       return nomeMes;
//     case 2:
//       nomeMes = "março";
//       return nomeMes;
//     case 3:
//       nomeMes = "abril";
//       return nomeMes;
//     case 4:
//       nomeMes = "maio";
//       return nomeMes;
//     case 5:
//       nomeMes = "junho";
//       return nomeMes;
//     case 6:
//       nomeMes = "julho";
//       return nomeMes;
//     case 7:
//       nomeMes = "agosto";
//       return nomeMes;
//     case 8:
//       nomeMes = "setembro";
//       return nomeMes;
//     case 9:
//       nomeMes = "outubro";
//       return nomeMes;
//     case 10:
//       nomeMes = "novembro";
//       return nomeMes;
//     case 11:
//       nomeMes = "dezembro";
//       return nomeMes;
//     default:
//       nomeMes = " ";
//   }
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaDate(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()} ` +
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }
// h1.innerHTML = criaDate(data);

// // const data = new Date("1987-04-20 00:00:00");
// // const diaSemana = data.getDay(); // Obtém o dia da semana (0 a 6)

// // const nomeDiaSemana = getDiaSemanaTexto(diaSemana);
// // console.log(nomeDiaSemana); // Deve imprimir "Quinta"
