function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retonaHora();
  console.log(hora);
} catch (e) {
  // tratar erro
} finally {
  console.log(":-) :=D :-|");
}

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new ReferenceError("X ou Y so podem receber numeros");
//   }
//   return x + y;
// }

// try {
//   console.log(soma(1, 2));
//   console.log(soma("1", 2));
// } catch (error) {
//   console.log("Exemplo de mensagem para o usuario quando encontrar um erro");
// }

// try{
//   console.log(a)
//   console.log("Abri um arquivo")
//   console.log("Manipulkei p arquivo e gerou erro")
//   console.log("Fechei o arquivo")
//   try{
//     console.log("posso fazer um try aninhado")
//   } catch(e){
//     console.log("posso fazer isso também")
//   } finally {
//     console.log("posso ter um finally")
//   }
// } catch(e){
//   console.log("tratando erro")
// } finally {
//   console.log("finally: Sempre será executado")
//   //pode se utilizar o finally para fechar programa por exemplo.
// }
