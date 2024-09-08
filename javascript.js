const gridSize = 600;
const gridRow = 16;
const gridColumn = 16;

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttondiv");
buttonDiv.style.width = `${gridSize}px`;
document.body.appendChild(buttonDiv);

const promptBtn = document.createElement("button");
promptBtn.classList.add("promptbutton");
promptBtn.textContent = "Prompt Size";
buttonDiv.appendChild(promptBtn);

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
