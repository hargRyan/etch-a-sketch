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

//STATEMENTS GO HERE

createGrid();