const gridSize = 16;

function createGrid () {
    const divContainer = document.getElementById('div-container');
    
    for (let i = 0; i<gridSize**2; i++){
        const divAddition = document.createElement('div');
        divAddition.className = "square"
        divContainer.appendChild(divAddition);
    }
}

createGrid();
