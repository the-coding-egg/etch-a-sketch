const container = document.querySelector(".container");
const row = document.createElement("div");
const column = document.createElement("div");

container.style.display = "flex";

column.style.flex = "1";
column.style.height = "25px";
column.style.border = "2px solid black";

row.style.flex = "1";
row.style.height = "25px";
row.style.border = "2px solid black";

const btn = document.createElement("button");
btn.textContent = "Grid Size";
document.body.appendChild(btn);


btn.addEventListener("click", () => {
  const requestedGrid = parseInt(prompt("Please input how big you want the grid"));
  if (requestedGrid <= 100 && requestedGrid > 0) {
    for (let i = 1; i <= requestedGrid; i++) {
      const columns = column.cloneNode(true);
      container.appendChild(columns);
      const rows = row.cloneNode(true);
      container.appendChild(rows);
    }
  } else {
    console.log("Number needs to be 0-100. Try again");
  }
});






