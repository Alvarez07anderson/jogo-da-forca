let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;


function desenhaJogoDaForca() {
    ctx.canvas.width = 140;
    ctx.canvas.height = 200;
    ctx.scale(20, 20);
    ctx.fillStyle = "#4B241B";
    ctx.fillRect(0,9,4,1);
    ctx.fillRect(1,0,1,9);
    ctx.fillRect(2,0,4,1);
    ctx.fillRect(4,1,1,2);

    ctx.fillStyle = "#4b0082";
    ctx.fillRect(3,2,3,1);
    ctx.fillRect(4,4,1,1);
    ctx.fillRect(4,6,1,1);
    ctx.fillRect(3,5,3,1);
    ctx.fillRect(3,7,1,1);
    ctx.fillRect(5,7,1,1);
    ctx.fillRect(3,3,2,1);
    ctx.fillRect(5,3,1,1);
 
}

window.onload=desenhaJogoDaForca();

