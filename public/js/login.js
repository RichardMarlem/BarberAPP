console.log("LOGIN.JS CARREGADO!");

let etapaAtual = 1;

function mostrarEtapa(numero) {

    document.querySelectorAll('.etapa').forEach(etapa => {
        etapa.hidden = true;
        etapa.classList.remove('ativa');
    });

    const proxima = document.getElementById(`etapa${numero}`);

    proxima.hidden = false;
    proxima.classList.add('ativa');

    etapaAtual = numero;
}

function proximaEtapa() {
    mostrarEtapa(etapaAtual + 1);
}

function voltarEtapa() {
    mostrarEtapa(etapaAtual - 1);
}

const btnCriarConta = document.getElementById("btnCriarConta");
const btnVoltarLogin = document.getElementById("btnVoltarLogin");

btnCriarConta.addEventListener("click", proximaEtapa);
btnVoltarLogin.addEventListener("click", voltarEtapa);