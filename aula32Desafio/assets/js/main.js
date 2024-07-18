//dom = document objetct model
//objeto "window" é a mãe de todos os elementos no html

const elementos = [
  { tag: "p", texto: "um texto qualquer" },
  { tag: "div", texto: "outro texto" },
  { tag: "section", texto: "terceiro texto" },
  { tag: "footer", texto: "quarto texto" },
];

const container = document.querySelector(".container"); //dom
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  //console.log(elementos[i].tag);
  let { tag, texto } = elementos[i]; //desestruturação
  let tagCriada = document.createElement(tag)
  let textoCriado = document.createTextNode(texto);//
  //tagCriada.innerText = texto;//innerText foi utilizado porque só tem texto
  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada);
  
}

container.appendChild(div);
