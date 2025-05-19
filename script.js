const botao = document.getElementById("meuBotao");
const elementoMensagem = document.getElementById("mensagem");

const mensagemMotivacional = `
    <p>Não importa o quão difícil seja o seu caminho agora, cada passo que você dá está te levando mais perto dos seus sonhos.</p>
    `;

function mostrarMensagem() {
    elementoMensagem.innerHTML = mensagemMotivacional;
}

botao.addEventListener("click", mostrarMensagem);