const container = document.querySelector(".container");

const GameBoard = ["", "", "", "", "", "", "", "", ""];
let currentChar = "x";

const player1 = {
  side: "red",
  check() {
    if (GameBoard[0] == "x" && GameBoard[1] == "x" && GameBoard[2] == "x") {
      win(this.side);
    } else if (
      GameBoard[0] == "x" &&
      GameBoard[4] == "x" &&
      GameBoard[8] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[2] == "x" &&
      GameBoard[4] == "x" &&
      GameBoard[6] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[3] == "x" &&
      GameBoard[4] == "x" &&
      GameBoard[5] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[6] == "x" &&
      GameBoard[7] == "x" &&
      GameBoard[8] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[0] == "x" &&
      GameBoard[3] == "x" &&
      GameBoard[6] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[1] == "x" &&
      GameBoard[4] == "x" &&
      GameBoard[7] == "x"
    ) {
      win(this.side);
    } else if (
      GameBoard[2] == "x" &&
      GameBoard[5] == "x" &&
      GameBoard[8] == "x"
    ) {
      win(this.side);
    }
  },
};

const player2 = {
  side: "green",
  check() {
    if (GameBoard[0] == "o" && GameBoard[1] == "o" && GameBoard[2] == "o") {
      win(this.side);
    } else if (
      GameBoard[0] == "o" &&
      GameBoard[4] == "o" &&
      GameBoard[8] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[2] == "o" &&
      GameBoard[4] == "o" &&
      GameBoard[6] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[3] == "o" &&
      GameBoard[4] == "o" &&
      GameBoard[5] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[6] == "o" &&
      GameBoard[7] == "o" &&
      GameBoard[8] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[0] == "o" &&
      GameBoard[3] == "o" &&
      GameBoard[6] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[1] == "o" &&
      GameBoard[4] == "o" &&
      GameBoard[7] == "o"
    ) {
      win(this.side);
    } else if (
      GameBoard[2] == "o" &&
      GameBoard[5] == "o" &&
      GameBoard[8] == "o"
    ) {
      win(this.side);
    }
  },
};

(function render() {
  GameBoard.forEach((element, index) => {
    currentChar = "x";
    let plate = document.createElement("div");
    plate.classList.add("plate");
    plate.textContent = GameBoard[index];
    container.appendChild(plate);
  });
})();

let plate = document.querySelectorAll(".plate");
plate.forEach((item, index) => {
  item.addEventListener("click", function () {
    reRender(item, index);
  });
});

function reRender(part, index) {
  if (part.textContent == "") {
    if (currentChar == "x") {
      GameBoard[index] = "x";
      part.textContent = GameBoard[index];
      part.style.color = "red";
      currentChar = "o";
      player1.check();
    } else {
      GameBoard[index] = "o";
      part.textContent = GameBoard[index];
      part.style.color = "green";
      currentChar = "x";
      player2.check();
    }
  }
}

function win(side) {
  plate.forEach((item, index) => {
    item.style.display = "none";
    container.style.backgroundColor = "lightgrey";
    container.textContent = `${side} won`;
    const btn = document.createElement("button");
    btn.classList.add("btn-win");
    btn.textContent = "Restart";
    btn.addEventListener("click", restart);
    container.appendChild(btn);
  });
}
