const gridSize = 50;

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

createGrid();

const container = Array.from(document.querySelectorAll('.square'));

container.forEach(square => {
    square.addEventListener("mouseenter", event => {
        let rgbColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
        event.target.style.backgroundColor = rgbColor;
    });
});


