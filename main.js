let container = document.querySelector(".container");
let colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
let SQUARES = 1008;

// create squares
for (let i = 0; i < SQUARES; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  let color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #111`;
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
let squaresDiv = [...document.querySelectorAll(".square")];

function test(){
  let color = getRandomColor();
  let randomSquare = squaresDiv[Math.floor(Math.random() * squaresDiv.length)]
    randomSquare.style.background = color;
    randomSquare.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
setInterval(test,100)