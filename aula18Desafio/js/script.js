//Tudo o que ocorre dentro do navegador é um evento
//mexer o mouse no navegador é um evento
//clicar é um evento
// e etc

//funcao que se auto invoca IIFE
function meuEscopo() {
  //#form se for ID .form se for classe
  const form = document.querySelector(".form"); //pega dentro do documento html a classe form
  const resultado = document.querySelector(".resultado"); // vai jogar o resultado dentro da div no html

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);

    resultado.innerHTML +=
      `<p>${nome.value} ${sobrenome.value} ` +
      `${peso.value} ${altura.value}</p>`;
    //console.log(nome.value, sobrenome.value, peso.value, altura.value)
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

// form.onsubmit = function (evento){//uma forma errada de se fazer
//   evento.preventDefault();//faz com que desabilite as funções por padrão

//   alert(1);
//   console.log("Foir enviado.");
// };

// let contador = 1;
// function recebeEventoForm(evento) {//forma que o pessoal do front usa
//   evento.preventDefault();
//   console.log(`Form não foi enviado ${contador}`);
//   contador++
// }

// form.addEventListener("submit", recebeEventoForm);
