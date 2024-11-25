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

const modal = document.getElementById("modal-sem-dialog-um");
const abrirModalBtn = document.getElementById("pratoUm");
const fecharModalBtn = document.getElementById(
  "botao-fechar-modal-sem-dialog-um"
);
const body = document.body;

// Abrir modal
abrirModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  body.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  body.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }
});

const modal2 = document.getElementById("modal-sem-dialog-dois");
const abrirModalBtn2 = document.getElementById("pratoDois");
const fecharModalBtn2 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dois"
);
const body2 = document.body;

// Abrir modal
abrirModalBtn2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  body2.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn2.addEventListener("click", () => {
  modal2.classList.add("hidden");
  body2.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal2.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.classList.add("hidden");
    body2.classList.remove("overflow-hidden");
  }
});

const modal3 = document.getElementById("modal-sem-dialog-tres");
const abrirModalBtn3 = document.getElementById("pratoTres");
const fecharModalBtn3 = document.getElementById(
  "botao-fechar-modal-sem-dialog-tres"
);
const body3 = document.body;

// Abrir modal
abrirModalBtn3.addEventListener("click", () => {
  modal3.classList.remove("hidden");
  body3.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn3.addEventListener("click", () => {
  modal3.classList.add("hidden");
  body3.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal3.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.classList.add("hidden");
    body3.classList.remove("overflow-hidden");
  }
});

const modal4 = document.getElementById("modal-sem-dialog-quatro");
const abrirModalBtn4 = document.getElementById("pratoQuatro");
const fecharModalBtn4 = document.getElementById(
  "botao-fechar-modal-sem-dialog-quatro"
);
const body4 = document.body;

// Abrir modal
abrirModalBtn4.addEventListener("click", () => {
  modal4.classList.remove("hidden");
  body4.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn4.addEventListener("click", () => {
  modal4.classList.add("hidden");
  body4.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal4.addEventListener("click", (e) => {
  if (e.target === modal4) {
    modal4.classList.add("hidden");
    body4.classList.remove("overflow-hidden");
  }
});

const modal5 = document.getElementById("modal-sem-dialog-cinco");
const abrirModalBtn5 = document.getElementById("pratoCinco");
const fecharModalBtn5 = document.getElementById(
  "botao-fechar-modal-sem-dialog-cinco"
);
const body5 = document.body;

// Abrir modal
abrirModalBtn5.addEventListener("click", () => {
  modal5.classList.remove("hidden");
  body5.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn5.addEventListener("click", () => {
  modal5.classList.add("hidden");
  body5.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal5.addEventListener("click", (e) => {
  if (e.target === modal5) {
    modal5.classList.add("hidden");
    body5.classList.remove("overflow-hidden");
  }
});

const modal6 = document.getElementById("modal-sem-dialog-seis");
const abrirModalBtn6 = document.getElementById("pratoSeis");
const fecharModalBtn6 = document.getElementById(
  "botao-fechar-modal-sem-dialog-seis"
);
const body6 = document.body;

// Abrir modal
abrirModalBtn6.addEventListener("click", () => {
  modal6.classList.remove("hidden");
  body6.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn6.addEventListener("click", () => {
  modal6.classList.add("hidden");
  body6.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal6.addEventListener("click", (e) => {
  if (e.target === modal6) {
    modal6.classList.add("hidden");
    body6.classList.remove("overflow-hidden");
  }
});

const modal7 = document.getElementById("modal-sem-dialog-sete");
const abrirModalBtn7 = document.getElementById("pratoSete");
const fecharModalBtn7 = document.getElementById(
  "botao-fechar-modal-sem-dialog-sete"
);
const body7 = document.body;

// Abrir modal
abrirModalBtn7.addEventListener("click", () => {
  modal7.classList.remove("hidden");
  body7.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn7.addEventListener("click", () => {
  modal7.classList.add("hidden");
  body7.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal7.addEventListener("click", (e) => {
  if (e.target === modal7) {
    modal7.classList.add("hidden");
    body7.classList.remove("overflow-hidden");
  }
});

const modal8 = document.getElementById("modal-sem-dialog-oito");
const abrirModalBtn8 = document.getElementById("pratoOito");
const fecharModalBtn8 = document.getElementById(
  "botao-fechar-modal-sem-dialog-oito"
);
const body8 = document.body;

// Abrir modal
abrirModalBtn8.addEventListener("click", () => {
  modal8.classList.remove("hidden");
  body8.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn8.addEventListener("click", () => {
  modal8.classList.add("hidden");
  body8.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal8.addEventListener("click", (e) => {
  if (e.target === modal8) {
    modal8.classList.add("hidden");
    body8.classList.remove("overflow-hidden");
  }
});

const modal9 = document.getElementById("modal-sem-dialog-nove");
const abrirModalBtn9 = document.getElementById("pratoNove");
const fecharModalBtn9 = document.getElementById(
  "botao-fechar-modal-sem-dialog-nove"
);
const body9 = document.body;

// Abrir modal
abrirModalBtn9.addEventListener("click", () => {
  modal9.classList.remove("hidden");
  body9.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn9.addEventListener("click", () => {
  modal9.classList.add("hidden");
  body9.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal9.addEventListener("click", (e) => {
  if (e.target === modal9) {
    modal9.classList.add("hidden");
    body9.classList.remove("overflow-hidden");
  }
});

const modal10 = document.getElementById("modal-sem-dialog-dez");
const abrirModalBtn10 = document.getElementById("pratoDez");
const fecharModalBtn10 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dez"
);
const body10 = document.body;

// Abrir modal
abrirModalBtn10.addEventListener("click", () => {
  modal10.classList.remove("hidden");
  body10.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn10.addEventListener("click", () => {
  modal10.classList.add("hidden");
  body10.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal10.addEventListener("click", (e) => {
  if (e.target === modal10) {
    modal10.classList.add("hidden");
    body10.classList.remove("overflow-hidden");
  }
});

const modal11 = document.getElementById("modal-sem-dialog-onze");
const abrirModalBtn11 = document.getElementById("pratoOnze");
const fecharModalBtn11 = document.getElementById(
  "botao-fechar-modal-sem-dialog-onze"
);
const body11 = document.body;

// Abrir modal
abrirModalBtn11.addEventListener("click", () => {
  modal11.classList.remove("hidden");
  body11.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn11.addEventListener("click", () => {
  modal11.classList.add("hidden");
  body11.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal11.addEventListener("click", (e) => {
  if (e.target === modal11) {
    modal11.classList.add("hidden");
    body11.classList.remove("overflow-hidden");
  }
});

const modal12 = document.getElementById("modal-sem-dialog-doze");
const abrirModalBtn12 = document.getElementById("pratoDoze");
const fecharModalBtn12 = document.getElementById(
  "botao-fechar-modal-sem-dialog-doze"
);
const body12 = document.body;

// Abrir modal
abrirModalBtn12.addEventListener("click", () => {
  modal12.classList.remove("hidden");
  body12.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn12.addEventListener("click", () => {
  modal12.classList.add("hidden");
  body12.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal12.addEventListener("click", (e) => {
  if (e.target === modal12) {
    modal12.classList.add("hidden");
    body12.classList.remove("overflow-hidden");
  }
});

const modal13 = document.getElementById("modal-sem-dialog-treze");
const abrirModalBtn13 = document.getElementById("pratoTreze");
const fecharModalBtn13 = document.getElementById(
  "botao-fechar-modal-sem-dialog-treze"
);
const body13 = document.body;

// Abrir modal
abrirModalBtn13.addEventListener("click", () => {
  modal13.classList.remove("hidden");
  body13.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn13.addEventListener("click", () => {
  modal13.classList.add("hidden");
  body13.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal13.addEventListener("click", (e) => {
  if (e.target === modal13) {
    modal13.classList.add("hidden");
    body13.classList.remove("overflow-hidden");
  }
});

const modal14 = document.getElementById("modal-sem-dialog-quatorze");
const abrirModalBtn14 = document.getElementById("pratoQuatorze");
const fecharModalBtn14 = document.getElementById(
  "botao-fechar-modal-sem-dialog-quatorze"
);
const body14 = document.body;

// Abrir modal
abrirModalBtn14.addEventListener("click", () => {
  modal14.classList.remove("hidden");
  body14.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn14.addEventListener("click", () => {
  modal14.classList.add("hidden");
  body14.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal14.addEventListener("click", (e) => {
  if (e.target === modal13) {
    modal14.classList.add("hidden");
    body14.classList.remove("overflow-hidden");
  }
});

const modal15 = document.getElementById("modal-sem-dialog-quinze");
const abrirModalBtn15 = document.getElementById("pratoQuinze");
const fecharModalBtn15 = document.getElementById(
  "botao-fechar-modal-sem-dialog-quinze"
);
const body15 = document.body;

// Abrir modal
abrirModalBtn15.addEventListener("click", () => {
  modal15.classList.remove("hidden");
  body15.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn15.addEventListener("click", () => {
  modal15.classList.add("hidden");
  body15.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal15.addEventListener("click", (e) => {
  if (e.target === modal15) {
    modal15.classList.add("hidden");
    body15.classList.remove("overflow-hidden");
  }
});

const modal16 = document.getElementById("modal-sem-dialog-dezeseis");
const abrirModalBtn16 = document.getElementById("pratoDezeseis");
const fecharModalBtn16 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dezeseis"
);
const body16 = document.body;

// Abrir modal
abrirModalBtn16.addEventListener("click", () => {
  modal16.classList.remove("hidden");
  body16.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn16.addEventListener("click", () => {
  modal16.classList.add("hidden");
  body16.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal16.addEventListener("click", (e) => {
  if (e.target === modal16) {
    modal16.classList.add("hidden");
    body16.classList.remove("overflow-hidden");
  }
});

const modal17 = document.getElementById("modal-sem-dialog-dezesete");
const abrirModalBtn17 = document.getElementById("pratoDezesete");
const fecharModalBtn17 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dezesete"
);
const body17 = document.body;

// Abrir modal
abrirModalBtn17.addEventListener("click", () => {
  modal17.classList.remove("hidden");
  body17.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn17.addEventListener("click", () => {
  modal17.classList.add("hidden");
  body17.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal17.addEventListener("click", (e) => {
  if (e.target === modal17) {
    modal17.classList.add("hidden");
    body17.classList.remove("overflow-hidden");
  }
});

const modal18 = document.getElementById("modal-sem-dialog-dezoito");
const abrirModalBtn18 = document.getElementById("pratoDezoito");
const fecharModalBtn18 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dezoito"
);
const body18 = document.body;

// Abrir modal
abrirModalBtn18.addEventListener("click", () => {
  modal18.classList.remove("hidden");
  body18.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn18.addEventListener("click", () => {
  modal18.classList.add("hidden");
  body18.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal18.addEventListener("click", (e) => {
  if (e.target === modal18) {
    modal18.classList.add("hidden");
    body18.classList.remove("overflow-hidden");
  }
});

const modal19 = document.getElementById("modal-sem-dialog-dezenove");
const abrirModalBtn19 = document.getElementById("pratoDesenove");
const fecharModalBtn19 = document.getElementById(
  "botao-fechar-modal-sem-dialog-dezenove"
);
const body19 = document.body;

// Abrir modal
abrirModalBtn19.addEventListener("click", () => {
  modal19.classList.remove("hidden");
  body19.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn19.addEventListener("click", () => {
  modal19.classList.add("hidden");
  body19.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal19.addEventListener("click", (e) => {
  if (e.target === modal19) {
    modal19.classList.add("hidden");
    body19.classList.remove("overflow-hidden");
  }
});

const modal20 = document.getElementById("modal-sem-dialog-vinte");
const abrirModalBtn20 = document.getElementById("pratoVinte");
const fecharModalBtn20 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte"
);
const body20 = document.body;

// Abrir modal
abrirModalBtn20.addEventListener("click", () => {
  modal20.classList.remove("hidden");
  body20.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn20.addEventListener("click", () => {
  modal20.classList.add("hidden");
  body20.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal20.addEventListener("click", (e) => {
  if (e.target === modal20) {
    modal20.classList.add("hidden");
    body20.classList.remove("overflow-hidden");
  }
});

const modal21 = document.getElementById("modal-sem-dialog-vinte-um");
const abrirModalBtn21 = document.getElementById("pratoVinteUm");
const fecharModalBtn21 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-um"
);
const body21 = document.body;

// Abrir modal
abrirModalBtn21.addEventListener("click", () => {
  modal21.classList.remove("hidden");
  body21.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn21.addEventListener("click", () => {
  modal21.classList.add("hidden");
  body21.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal21.addEventListener("click", (e) => {
  if (e.target === modal21) {
    modal21.classList.add("hidden");
    body21.classList.remove("overflow-hidden");
  }
});

const modal22 = document.getElementById("modal-sem-dialog-vinte-dois");
const abrirModalBtn22 = document.getElementById("pratoVinteDois");
const fecharModalBtn22 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-dois"
);
const body22 = document.body;

// Abrir modal
abrirModalBtn22.addEventListener("click", () => {
  modal22.classList.remove("hidden");
  body22.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn22.addEventListener("click", () => {
  modal22.classList.add("hidden");
  body22.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal22.addEventListener("click", (e) => {
  if (e.target === modal22) {
    modal22.classList.add("hidden");
    body22.classList.remove("overflow-hidden");
  }
});

const modal23 = document.getElementById("modal-sem-dialog-vinte-tres");
const abrirModalBtn23 = document.getElementById("pratoVinteTres");
const fecharModalBtn23 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-tres"
);
const body23 = document.body;

// Abrir modal
abrirModalBtn23.addEventListener("click", () => {
  modal23.classList.remove("hidden");
  body23.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn23.addEventListener("click", () => {
  modal23.classList.add("hidden");
  body23.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal23.addEventListener("click", (e) => {
  if (e.target === modal23) {
    modal23.classList.add("hidden");
    body23.classList.remove("overflow-hidden");
  }
});

const modal24 = document.getElementById("modal-sem-dialog-vinte-quatro");
const abrirModalBtn24 = document.getElementById("pratoVinteQuatro");
const fecharModalBtn24 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-quatro"
);
const body24 = document.body;

// Abrir modal
abrirModalBtn24.addEventListener("click", () => {
  modal24.classList.remove("hidden");
  body24.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn24.addEventListener("click", () => {
  modal24.classList.add("hidden");
  body24.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal24.addEventListener("click", (e) => {
  if (e.target === modal24) {
    modal24.classList.add("hidden");
    body24.classList.remove("overflow-hidden");
  }
});

const modal25 = document.getElementById("modal-sem-dialog-vinte-cinco");
const abrirModalBtn25 = document.getElementById("pratoVinteCinco");
const fecharModalBtn25 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-cinco"
);
const body25 = document.body;

// Abrir modal
abrirModalBtn25.addEventListener("click", () => {
  modal25.classList.remove("hidden");
  body25.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn25.addEventListener("click", () => {
  modal25.classList.add("hidden");
  body25.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal25.addEventListener("click", (e) => {
  if (e.target === modal25) {
    modal25.classList.add("hidden");
    body25.classList.remove("overflow-hidden");
  }
});

const modal26 = document.getElementById("modal-sem-dialog-vinte-seis");
const abrirModalBtn26 = document.getElementById("pratoVinteSeis");
const fecharModalBtn26 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-seis"
);
const body26 = document.body;

// Abrir modal
abrirModalBtn26.addEventListener("click", () => {
  modal26.classList.remove("hidden");
  body26.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn26.addEventListener("click", () => {
  modal26.classList.add("hidden");
  body26.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal26.addEventListener("click", (e) => {
  if (e.target === modal26) {
    modal26.classList.add("hidden");
    body26.classList.remove("overflow-hidden");
  }
});

const modal27 = document.getElementById("modal-sem-dialog-vinte-sete");
const abrirModalBtn27 = document.getElementById("pratoVinteSete");
const fecharModalBtn27 = document.getElementById(
  "botao-fechar-modal-sem-dialog-vinte-sete"
);
const body27 = document.body;

// Abrir modal
abrirModalBtn27.addEventListener("click", () => {
  modal27.classList.remove("hidden");
  body27.classList.add("overflow-hidden"); // Evita rolagem no fundo
});

// Fechar modal
fecharModalBtn27.addEventListener("click", () => {
  modal27.classList.add("hidden");
  body27.classList.remove("overflow-hidden"); // Restaura rolagem no fundo
});

// Fechar modal clicando fora do conteúdo (se quiser)
modal27.addEventListener("click", (e) => {
  if (e.target === modal27) {
    modal27.classList.add("hidden");
    body27.classList.remove("overflow-hidden");
  }
});
