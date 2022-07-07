let gridSize = 16;

function createGrid () {
    const divContainer = document.getElementById('div-container');
    
    for (let i = 0; i<gridSize**2; i++){
        const divAddition = document.createElement('div');
        divAddition.className = "square"
        divContainer.appendChild(divAddition);
    }
}

function getRandomInt (){
    return Math.floor(Math.random() * 255);
}

function eventSquare () {
    const container = Array.from(document.querySelectorAll('.square'));

    container.forEach(square => {
        square.addEventListener("mouseenter", event => {
            let rgbColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
            event.target.style.backgroundColor = rgbColor;
        });
    });
}

function eventBtn (){
    const btn = document.getElementById("grid-btn");
    btn.addEventListener("click",event => {
    const input = document.querySelector('input').value;
    gridSize = input;
    clearGrid();
    });
}

function clearGrid (){
    const container = document.getElementById('div-container');

    while (container.lastElementChild) 
        container.removeChild(container.lastElementChild);

    createGrid();
    eventSquare();
}

createGrid();
eventSquare();
eventBtn();
