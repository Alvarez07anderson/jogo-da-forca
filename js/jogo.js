const contenedorPalavra = document.getElementById("contenedorDaPalavra");
const botaoInicio = document.getElementById("novoJogo");
const seçãoLetrasUsadas = document.getElementById("letras-usadas");

let canvas = document.getElementById("jogo-canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const partesDoCorpo = [
    [3, 2, 3, 2],
    [4, 4, 1, 3],
    [3, 5, 3, 1],
    [3, 7, 1, 1],
    [5, 7, 1, 1],
];

let palavraSelecionada;
let letrasUsadas;
let erros;
let acertos;

const adicionarLetra = letra => {
    const letraElement = document.createElement("span");
    letraElement.innerHTML = letra.toUpperCase();
    seçãoLetrasUsadas.appendChild(letraElement);
}

const adicionarParteDoCorpo = corpoParte => {
    ctx.fillStyle = "#4b0082";
    ctx.fillRect(...corpoParte);
};

const letraErrada = () => {
    adicionarParteDoCorpo(partesDoCorpo[erros]);
    erros++;
    if(erros === partesDoCorpo.length) {
        var perdeu = document.getElementById("resultado");
        perdeu.textContent = "Você Perdeu!";
        perdeu.style = "display:block";
        perdeu;
        fimDoJogo(); 
    }
};

const fimDoJogo = () => {
    document.removeEventListener("keydown", eventoLetra);
};

const letraCorreta = letra => {
    const { children } = contenedorPalavra;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letra) {
            children[i].classList.toggle("oculta");
            acertos++;
        }
    }
    if(acertos === palavraSelecionada.length) { 
        var acertou = document.getElementById("resultado");
        acertou.textContent = "Você Acertou!";
        acertou.style = "display:block";
        acertou;
        fimDoJogo();
    }
};

const inputLetra = letra => {
    if(palavraSelecionada.includes(letra)) {
        letraCorreta(letra);
    } else {
        letraErrada();
    }
    adicionarLetra(letra);
    letrasUsadas.push(letra);
};

const eventoLetra = evento => {
    let letraNova = evento.key.toUpperCase();
    if(letraNova.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraNova)) {
        inputLetra(letraNova);
    };
};

const desenhaPalavra = () => {
    palavraSelecionada.forEach(letra => {
        const letraElement = document.createElement("span");
        letraElement.innerHTML = letra.toUpperCase();
        letraElement.classList.add("letra");
        letraElement.classList.add("oculta");
        contenedorPalavra.appendChild(letraElement);
    });
};

const palavraAleatoria = () => {
    let palavra = palavras[Math.floor((Math.random() * palavras.length))].toUpperCase();
    palavraSelecionada = palavra.split("");
};

const desenhaForca = () => {

    ctx.canvas.width = 140;
    ctx.canvas.height = 200;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#4B241B";
    ctx.fillRect(0,9,4,1);
    ctx.fillRect(1,0,1,9);
    ctx.fillRect(2,0,4,1);
    ctx.fillRect(4,1,1,2);
    
};

const inicioJogo = () => {
    letrasUsadas = [];
    erros = 0;
    acertos = 0;
    acertou = document.getElementById("resultado").style = "display:none";
    perdeu = document.getElementById("resultado").style = "display:none";
    contenedorPalavra.innerHTML = "";
    seçãoLetrasUsadas.innerHTML = "";
    desenhaForca();
    palavraAleatoria();
    desenhaPalavra();
    document.addEventListener("keydown", eventoLetra);
};

botaoInicio.addEventListener("click", inicioJogo);