//tudo na linguagem JS pode ser avaliado como true ou false
//Falsy : false 0 '' "" `` null undefined NaN

// const a = 0;
// const b = null;
// const c = "false";//prioriza o true
// const d = false;
// const e = NaN;
// //lê da esquerda para direita.
// console.log(a || b || c || d || e);//executa a letra c

// const corUsuario = "red";
// const corPadrao = corUsuario || "black";
// console.log(corPadrao); //red

// const corUsuario = null;
// const corPadrao = corUsuario || "black";
// console.log(corPadrao); //prioriza o true

//console.log(0 || false || null || "Teus" || true); //Teus

// function fala01() {
//   return "oi";
// }

// const vaiExecutar = "Cratos";
// console.log(vaiExecutar && fala01());//oi

// function fala01() {
//   return "oi";
// }

// let vaiExecutar;
// console.log(vaiExecutar && console.logfala01());//undefined

// function fala01() {
//   return "oi";
// }

// let vaiExecutar = false;
// console.log(vaiExecutar && console.logfala01());//false

// console.log("Mateus" && "Teus"); //true pq a string contém string
// console.log("Mateus" && NaN && "Teus"); //NaN
// console.log("Mateus" && undefined && "Teus"); //undefined
// console.log("Mateus" && "" && "Teus"); //retorna nada
// console.log("Mateus" && '' && "Teus"); //retorna nada
// console.log("Mateus" && `` && "Teus"); //retorna nada
