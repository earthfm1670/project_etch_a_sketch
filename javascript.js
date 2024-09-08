const gridSize = 600;
const gridRow = 16;
const gridColumn = 16;

const container = document.createElement("div");
container.classList.add("flexcontainer");
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;
document.body.appendChild(container);