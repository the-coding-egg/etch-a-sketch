//create the container element
const container = document.querySelector(".container");

//create the button
const btn = document.createElement("button");
btn.textContent = "Grid Size";
document.body.style.textAlign = "center";
document.body.prepend(btn);
btn.style.margin = "20px";
btn.style.backgroundColor = "#46383A";
btn.style.color = "white";
btn.style.borderRadius = "5px";

btn.addEventListener("click", () => {
  const size = parseInt(prompt("Enter grid size."));
  if (size <= 100 && size > 0) {
    createGrid(size);
  } else {
    alert("Entry needs to be between 0-100");
  }
});



function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";

    const cellSize = 100 / size;
    grid.style.width = `${cellSize}%`;
    grid.style.aspectRatio = "1 / 1";
    grid.style.border = "1px solid black";
    grid.style.boxSizing = "border-box";

    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  }
}

createGrid(16);
