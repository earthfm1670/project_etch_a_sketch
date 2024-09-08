let gridSize = 600;
let gridRow = 16;
let gridColumn = 16;

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttondiv");
buttonDiv.style.width = `${gridSize}px`;
document.body.appendChild(buttonDiv);

const promptBtn = document.createElement("button");
promptBtn.classList.add("promptbutton");
promptBtn.textContent = "Prompt Size";
buttonDiv.appendChild(promptBtn);

let container;

promptBtn.addEventListener("click", () => {
    const gridSizeInput = prompt("How many squares per sides would you like?");
    if (gridSizeInput > 100) {
        prompt("The inputted number is too high, please input a number lower than or equal to 100.")
    }

    if (container){
        container.remove();
    };

    container = document.createElement("div");
    container.classList.add("flexcontainer")
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;
    document.body.appendChild(container);

    const newGridRow = gridSizeInput;
    const newGridColumn = gridSizeInput;

    for (let i = 0; i < (newGridRow * newGridColumn); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize / newGridColumn) - 2}px`;
        gridCell.style.height = `${(gridSize / newGridRow) - 2}px`;
        gridCell.classList.add("cell");

        container.appendChild(gridCell);

        const randomNumber = Math.floor((Math.random() * 3) + 1);

        gridCell.addEventListener("mouseover", () => {
            if (randomNumber === 1) {
                gridCell.style.backgroundColor = "red";
            } else if (randomNumber === 2) {
                gridCell.style.backgroundColor = "blue";
            } else if (randomNumber === 3) {
                gridCell.style.backgroundColor = "green";
            }
        })
    }  
})

function createGrid() {
    if (container) {
        container.remove();
    }
    container = document.createElement("div");
    container.classList.add("flexcontainer")
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;
    document.body.appendChild(container);


    for (let i = 0; i < (gridRow * gridColumn); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize / gridColumn) - 2}px`;
        gridCell.style.height = `${(gridSize / gridRow) - 2}px`;
        gridCell.classList.add("cell");

        container.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = "black";
        })

    }
}

createGrid();