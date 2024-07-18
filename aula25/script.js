const pontuacaoUsuario = 999;
//Operação Ternária
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUsuario = null;//Usuário escolhe uma cor
const corPadrao = corUsuario || "Green"; // caso não tenha é colocado um padrão. Isso é conhecido como, fallback.

console.log(nivelUsuario);
// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário Normal");
// }
