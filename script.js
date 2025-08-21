const container = document.querySelector(".container");

container.style.display = "flex";

const btn = document.createElement("button");
btn.textContent = "Grid Size";
document.body.style.textAlign = "center";
document.body.prepend(btn);
btn.style.margin = "20px";

btn.addEventListener("click", () => {
  const requestedGrid = parseInt(prompt("Please input how big you want the grid"));
  if (requestedGrid <= 100 && requestedGrid > 0) {
    for (let i = 1; i <= requestedGrid; i++) {
      const row = document.createElement("div");
      row.style.flex = "1";
      row.style.height = "25px";
      row.style.border = "2px solid black";
      row.classList.add("row");
      container.appendChild(row);

      for (let j = 1; j <= requestedGrid; j++) {
        const column = document.createElement("div");
        column.style.flex = "1";
        column.style.height = "25px";
        column.style.border = "2px solid black";
        column.classList.add("column");
        row.appendChild(column);
      }
    }
  } else {
    console.log("Number needs to be 0-100. Try again");
  }
});






