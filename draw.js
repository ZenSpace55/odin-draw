let gridWidth = 16;
let gridHeight = 16;

let canvasPanels = [];

const canvas = document.querySelector('.canvas');

let paintColor = "black";

function buildCanvas(width, height){
    canvas.style.gridTemplateColumns = "repeat(8, 1fr)";
    canvas.style.gridTemplateRows = "repeat(8, 1fr)";
    for(let i = 0; i < width * height; i++){
        let panel = document.createElement('div');
        panel.classList.add("canvasPanel");
        canvas.appendChild(panel);
        panel.addEventListener("mouseover", function(){paintCel(panel)});
    }
}

function paintCel(myCel){
    console.log("on cel");
    myCel.style.backgroundColor = paintColor;
}

buildCanvas(8, 8);