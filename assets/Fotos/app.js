const botaoUm = document.querySelector(".botaoUm");
const botaoDois = document.querySelector(".botaoDois");
const botaoTres = document.querySelector(".botaoTres");
const botaoQuatro = document.querySelector(".botaoQuatro");

botaoUm.addEventListener("click", function apertar() {
  botaoUm.style.color = "#ff005c";
  botaoDois.style.color = "black";
  botaoTres.style.color = "black";
  botaoQuatro.style.color = "black";
});

botaoDois.addEventListener("click", function apertar() {
  botaoDois.style.color = "#ff005c";
  botaoUm.style.color = "black";
  botaoTres.style.color = "black";
  botaoQuatro.style.color = "black";
});

botaoTres.addEventListener("click", function apertar() {
  botaoTres.style.color = "#ff005c";
  botaoUm.style.color = "black";
  botaoDois.style.color = "black";
  botaoQuatro.style.color = "black";
});

botaoQuatro.addEventListener("click", function apertar() {
  botaoQuatro.style.color = "#ff005c";
  botaoUm.style.color = "black";
  botaoDois.style.color = "black";
  botaoTres.style.color = "black";
});

window.addEventListener("DOMContentLoaded", function () {
  botaoUm.style.color = "#ff005c";
});
