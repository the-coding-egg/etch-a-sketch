const grid = document.createElement("div");
const container = document.querySelector(".container");

container.style.display = "flex";
grid.style.width = "100px";
grid.style.height = "100px";
grid.style.border = "2px solid black";

const requestedGrid = parseInt(prompt("Please input how big you want the grid"));
if (requestedGrid <= 100 && requestedGrid > 0) {
  for (let i = 1; i <= requestedGrid; i++) {
    const fullGrid = grid.cloneNode(true);
    container.appendChild(fullGrid);
  }
} else {
  console.log("Number needs to be 0-100. Try again");

}





