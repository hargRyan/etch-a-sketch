//GLOBAL VARIABLES AND FUNCTIONS GO HERE

function createGrid() {
    let grid = document.getElementById('grid');

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

//STATEMENTS GO HERE

createGrid();