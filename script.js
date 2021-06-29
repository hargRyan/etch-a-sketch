//GLOBAL VARIABLES AND FUNCTIONS GO HERE
const grid = document.getElementById('grid');

function createGrid(gridSize) {

    setGridSize(gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {

        let div = document.createElement('div');
        div.classList.add("cell");
        div.addEventListener('mouseover', function() {
            setBGcolor(div);
        });
        grid.appendChild(div);

    }
}

function setGridSize(number) {
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

function setBGcolor(node) {

    node.style.backgroundColor = 'black';
}

function resetBGcolor() {
    let cells = document.querySelectorAll("div.cell");

    cells.forEach(function(cell) {
        cell.style.backgroundColor = "white";
    });
}

function changeGridSize() {

    let gridSize;

    while (!(Number.isFinite(gridSize) && gridSize <= 100 && gridSize > 0)) {

        gridSize = prompt("Please enter a grid size between 1 to 100.", "10");
        gridSize = Number(gridSize);

        if (!(Number.isFinite(gridSize) && gridSize <= 100 && gridSize > 0)) {
            alert("There was something wrong with your entry.");
        } else if (gridSize === null) {
            return;
        }
    }

    deleteGrid();
    createGrid(gridSize);
}

function deleteGrid() {

    let grid = document.getElementById('grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

//STATEMENTS GO HERE

createGrid(10);