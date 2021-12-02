let gridWidth = 16;
let gridHeight = 16;

let canvasPanels = [];

const canvas = document.querySelector('.canvas');

let paintColor = "rgb(54, 54, 54)";
let clearColor = "rgb(160, 160, 160)";

function buildCanvas(width, height){
    gridWidth = width;
    gridHeight = height;
    canvas.style.gridTemplateColumns = "repeat(" + gridWidth +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + gridHeight +", 1fr)";
    for(let i = 0; i < gridWidth * gridHeight; i++){
        let panel = document.createElement('div');
        panel.classList.add("canvasPanel");
        canvas.appendChild(panel);
        panel.addEventListener("mouseover", function(){paintCel(panel, paintColor)});
    }
}

function paintCel(myCel, color){
    myCel.style.backgroundColor = color;
}

function clearCanvas(){
    let cels = canvas.childNodes;
    for (let i = 0; i < canvas.childNodes.length; i++){
        paintCel(cels[i], clearColor);
    }
}
buildCanvas(24, 24);