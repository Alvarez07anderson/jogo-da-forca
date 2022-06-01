const palavraInput = document.getElementById("inputDaPalavra");
const botaoSalvaJoga = document.getElementById("botao-salvar-e-jogar");

botaoSalvaJoga.addEventListener("click", function() {
    palavras.push(palavraInput.value);
    console.log(palavras);
});