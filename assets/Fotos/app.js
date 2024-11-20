const botaoUm = document.querySelector(".botaoUm");
const botaoDois = document.querySelector(".botaoDois");
const botaoTres = document.querySelector(".botaoTres");
const botaoQuatro = document.querySelector(".botaoQuatro");
const botoesPc = document.querySelectorAll("#botao-pc");
const periodo = document.querySelector(".periodo");
const estabelecimento = document.querySelector("button");

function horarioFuncionamento() {
  let agora = new Date();
  let hora = agora.getHours();
  let msg1;
  let msg2;

  if (hora >= 8 && hora < 18) {
    msg1 = "Aberto até as 18:00 horas";
    msg2 = "Sacola vazia";
  } else {
    msg1 = "Fechado";
    msg2 = "Estabelecimento fechado";
    periodo.style.color = "red";
  }

  periodo.innerHTML = `${msg1}`;
  estabelecimento.innerHTML = `${msg2}`;
}

horarioFuncionamento();
window.addEventListener("DOMContentLoaded", function () {
  const primeiroBotao = botoesPc[0];
  if (primeiroBotao) {
    primeiroBotao.classList.add(
      "bg-white",
      "text-red-500",
      "p-1",
      "rounded-[10px]"
    );
  }
});

Array.from(botoesPc).forEach((botaoPc, _, botoesPc) => {
  botaoPc.addEventListener("click", function () {
    botoesPc.forEach((botaoPc) => {
      botaoPc.classList.remove("bg-white");
      botaoPc.classList.remove("text-red-500");
      this.classList.remove("p-1");
      this.classList.add("rounded-[5px]");
    });

    this.classList.add("bg-white");
    this.classList.add("text-red-500");
    this.classList.add("p-1");
    this.classList.add("rounded-[10px]");
  });
});

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

const modalUm = document.querySelector("#modalUm");
const pratoUm = document.querySelector("#pratoUm");
const botaoFecharUm = document.querySelector("#botaoFecharUm");

function abrirModal(modal) {
  modal.showModal();
}

function fecharModal(modal) {
  modal.close();
}

pratoUm.addEventListener("click", function () {
  abrirModal(modalUm);
});

botaoFecharUm.addEventListener("click", function () {
  fecharModal(modalUm);
});
