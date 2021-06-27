//GLOBAL VARIABLES AND FUNCTIONS GO HERE

function createGrid() {
    let grid = document.getElementById('grid');

    for(let i=0; i <= 255; i++) {
    
        let div = document.createElement('div');
        div.classList.add("cell");
        // addEventListener('mouseover', changeBGcolor);
        grid.appendChild(div);
        
    }
}

function changeBGcolor (node) {
    // should set the background color of a given node to a random color.
    // want this function to run within the for loop.

    
}

//STATEMENTS GO HERE

createGrid();