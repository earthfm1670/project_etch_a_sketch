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

promptBtn.addEventListener("click", () => {
    const gridSizeInput = prompt("How many squares per sides would you like?");
    if (gridSizeInput > 100) {
        prompt("The inputted number is too high, please input a number lower than or equal to 100.")
    }
    const newGridRow = gridSizeInput;
    const newGridColumn = gridSizeInput;
    
    console.log(newGridRow);
    console.log(newGridColumn);

    container.remove();

    const newContainer = document.createElement("div");
    newContainer.classList.add("flexcontainer")
    newContainer.style.width = `${gridSize}px`;
    newContainer.style.height = `${gridSize}px`;
    document.body.appendChild(newContainer);

    for (let i = 0; i < (newGridRow * newGridColumn); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize / newGridColumn) - 2}px`;
        gridCell.style.height = `${(gridSize / newGridRow) - 2}px`;
        gridCell.classList.add("cell");

        newContainer.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = "blue";
        })
    }  
})

const container = document.createElement("div");
container.classList.add("flexcontainer")
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;
document.body.appendChild(container);

function createGrid() {
    for (let i = 0; i < (gridRow * gridColumn); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize / gridColumn) - 2}px`;
        gridCell.style.height = `${(gridSize / gridRow) - 2}px`;
        gridCell.classList.add("cell");

        container.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = "red";
        })

    }
}

createGrid();
