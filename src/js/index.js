const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

const modoEscuroEstaAtivo = body.classList.contains("modo-dark");

    body.classList.toggle("modo-dark")

    if (modoEscuroEstaAtivo) {
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});



