const paragrafos = document.querySelectorAll("p");
const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
  p.style.backgroundColor = backGroundColorBody;
  p.style.color = "#ffffff";
}
