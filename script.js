//GLOBAL VARIABLES AND FUNCTIONS GO HERE


function createGrid() {
    const grid = document.getElementById('grid');

    for(let i=0; i <= 255; i++) {
    
        let div = document.createElement('div');
        div.classList.add("cell");
        div.addEventListener('mouseover', function() {
          setBGcolor(div);
        });
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
let gridLength;

    while (!(Number.isFinite(gridWidth) &&  gridWidth <= 100 && gridWidth > 0)) {

        gridWidth = prompt("Please enter a grid width between 1 to 100.", "10");
        gridWidth = Number(gridWidth);

        if (!(Number.isFinite(gridWidth) &&  gridWidth <= 100 && gridWidth > 0)) {
            alert("There was something wrong with your entry.");
        }
    }

    while (!(Number.isFinite(gridLength) &&  gridLength <= 100 && gridLength > 0)) {

        gridLength = prompt("Please enter a grid length between 1 to 100.", "10");
        gridLength = Number(gridLength);

        if (!(Number.isFinite(gridLength) &&  gridLength <= 100 && gridLength > 0)) {
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