//GLOBAL VARIABLES AND FUNCTIONS GO HERE

function createGrid() {
    let grid = document.getElementById('grid');

    for(let i=0; i <= 255; i++) {
    
        let div = document.createElement('div');
        div.classList.add("cell");
        addEventListener('mouseover', setBGcolor(div));
        grid.appendChild(div);
        
    }
}

function setBGcolor (node) {
    // should set the background color of a given node to a random color.
    // want this function to run within the for loop.

    let backGround = node.style.backgroundColor = 'black';

    
}

//STATEMENTS GO HERE

createGrid();