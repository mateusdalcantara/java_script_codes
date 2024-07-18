/*
entre 0 - 11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite
*/

// if pode ser utilizado sozinho
// para ter um else if deve existir primeiro um if
//so pode existir um else. Utilizada em final de cadeia lógica de código 

const hora = 19;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia"); //true bom dia
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá");
}
