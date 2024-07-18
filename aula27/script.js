function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      break;
    case 2:
      diaSemanaTexto = "Terça";
      break;
    case 3:
      diaSemanaTexto = "Quarta";
      break;
    case 4:
      diaSemanaTexto = "Quinta";
      break;
    case 5:
      diaSemanaTexto = "Sexta";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break;
    default:
      diaSemanaTexto = " ";
  }
  return diaSemanaTexto;
}

const data = new Date("1987-04-20 00:00:00");
const diaSemana = data.getDay(); // Obtém o dia da semana (0 a 6)

const nomeDiaSemana = getDiaSemanaTexto(diaSemana);
console.log(nomeDiaSemana); // Deve imprimir "Quinta"

//const data = new Date("");

//os dias da semana começan no 0
// const data = new Date("1987-04-21 00:00:00");
// //const diaSemana = data.getDay(); ???

// const diaSemana = 2;
// let diaSemanaTexto;

// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = "Domingo";
//     break;
//   case 1:
//     diaSemanaTexto = "Segunda";
//     break;
//   case 2:
//     diaSemanaTexto = "Terça";
//     break;
//   case 3:
//     diaSemanaTexto = "Quarta";
//     break;
//   case 4:
//     diaSemanaTexto = "Quinta";
//     break;
//   case 5:
//     diaSemanaTexto = "Sexta";
//     break;
//   case 6:
//     diaSemanaTexto = "Sábado";
//     break;
//   default:
//     diaSemanaTexto = " ";
// }
// console.log(diaSemana, diaSemanaTexto);

// if (diaSemana === 0) {
//   diaSemana = "Domingo";
// }else if (diaSemana === 1){
//   diaSemana = "Segunda"
// } else if (diaSemana === 2) {
//   diaSemana = "Terça";
// } else if (diaSemana === 3) {
//   diaSemana = "Quarta";
// } else if (diaSemana === 4) {
//   diaSemana = "Quinta";
// } else if (diaSemana === 5) {
//   diaSemana = "Sexta";
// } else if (diaSemana === 6) {
//   diaSemana = "Sábado";
// }

// console.log(diaSemana);
