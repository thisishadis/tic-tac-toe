const gameBoard = document.querySelector("#gameBoard");
const infoDisplay = document.querySelector("#info");

const allCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
infoDisplay.textContent = "Circle goes first";

function createGameBoard() {
  allCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

createGameBoard();

function addGo(event) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  event.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = go + "  turn.";
  event.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  console.log(allSquares);
  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningComb.forEach((array) => {
    let circlewins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );
    if (circlewins) {
        infoDisplay.textContent = 'Circle wins!';
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        return
    }
  });

  winningComb.forEach((array) => {
    let crosswins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );
    if (crosswins) {
        infoDisplay.textContent = 'cross  wins!';
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        return
    }
  });
}
