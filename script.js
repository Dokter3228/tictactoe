const container = document.querySelector(".container");

const GameBoard = ["x", "o", "x", "x", "x", "o", "x", "x", "o"];

class Player {}

function render() {
  GameBoard.forEach((element, index) => {
    let plate = document.createElement("div");
    plate.classList.add("plate");
    plate.textContent = GameBoard[index];
    container.appendChild(plate);
  });
}
render();
