//create the container element
const container = document.querySelector(".container");

//style the container
container.style.display = "flex";
container.style.flex = "wrap";
container.style.width = "600px";
container.style.alignItems = "center";
container.style.justifyContent = "center";

//ensure the container is the same width every time
const containerWidth = container.clientWidth;

//create the button
const btn = document.createElement("button");
btn.textContent = "Grid Size";
document.body.style.textAlign = "center";
document.body.prepend(btn);
btn.style.margin = "20px";
btn.style.backgroundColor = "#46383A";
btn.style.color = "white";
btn.style.borderRadius = "5px";

//add functionality of button
btn.addEventListener("click", () => {
  container.innerHTML = "";
  const requestedGrid = parseInt(prompt("Please input how big you want the grid"));
  if (requestedGrid <= 100 && requestedGrid > 0) {
    for (let i = 1; i <= requestedGrid; i++) {
      const row = document.createElement("div");
      row.style.flex = "1";
      row.style.border = "1px solid black";
      row.classList.add("row");
      container.appendChild(row);

      for (let j = 1; j <= requestedGrid; j++) {
        const column = document.createElement("div");
        column.style.flex = "1";
        column.style.border = "1px solid black";
        column.style.height = "100px";
        column.classList.add("column");
        row.appendChild(column);
      }
    }
  } else {
    console.log("Number needs to be 0-100. Try again");
  }
});






