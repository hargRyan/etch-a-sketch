//GLOBAL VARIABLES AND FUNCTIONS GO HERE
let width = 10; length = 10;

const grid = document.getElementById('grid');

function createGrid() {
    

    for(let i=0; i < length; i++) {
    
        let div = document.createElement('div');
        div.classList.add("cell");
        div.addEventListener('mouseover', function() {
          setBGcolor(div);
        });
        grid.appendChild(div);
        
    }
}

function setGridSize () {
    grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
}

function createGrid2() {

    for (let i=0 ; i< length**2 ; i++) {

        let div = document.createElement('div');
        div.classList.add('cell');
        grid.appendChild(div);
    }
    

}

function setBGcolor (node) {

    node.style.backgroundColor = 'black';    
}

function resetBGcolor () {
    let cells = document.querySelectorAll("div.cell");

    cells.forEach(function (cell) {
        cell.style.backgroundColor = "white";
    });
}

function newGrid() { //works as intended for the moment.

let gridWidth;

    while (!(Number.isFinite(gridWidth) &&  gridWidth <= 100 && gridWidth > 0)) {

        gridWidth = prompt("Please enter a grid width between 1 to 100.", "10");
        gridWidth = Number(gridWidth);

        if (!(Number.isFinite(gridWidth) &&  gridWidth <= 100 && gridWidth > 0)) {
            alert("There was something wrong with your entry.");
        }
    }
}

function buttonFunction () {
    resetBGcolor();
    newGrid();
}
//STATEMENTS GO HERE

createGrid();
