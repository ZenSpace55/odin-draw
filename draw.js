let gridWidth = 16;
let gridHeight = 16;

let canvasPanels = [];

const canvas = document.querySelector('.canvas');

const resSlider = document.querySelector('.slider');


let paintColor = "rgb(54, 54, 54)";
let clearColor = "rgb(160, 160, 160)";

function prepCanvas(){
    resSlider.value = 100;
    resSlider.addEventListener("input", function(){changeCanvasResolution(resSlider.value, resSlider.value)});
    buildCanvas(resSlider.value, resSlider.value);
}

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

function changeCanvasResolution(width, height){
    gridWidth = width;
    gridHeight = height;
    clearCanvas();
    canvas.style.gridTemplateColumns = "repeat(" + gridWidth +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + gridHeight +", 1fr)";
}



function paintCell(myCell, color){
    myCell.style.backgroundColor = color;
}

function clearCanvas(){
    let cells = canvas.childNodes;
    for (let i = 0; i < canvas.childNodes.length; i++){
        paintCel(cells[i], clearColor);
    }
}
prepCanvas();
//buildCanvas(24, 24);