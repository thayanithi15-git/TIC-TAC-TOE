const tiles = document.querySelectorAll(".tile");
let currentPlayer = "X";
let gameOver = false;

tiles.forEach((tile) => tile.addEventListener("click", tileClick));
document.getElementById("play-again").addEventListener("click", startNewGame);

function tileClick(event) {
    const tile = event.target;
    if (!gameOver && !tile.innerText) {
        tile.innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            tiles[a - 1].innerText &&
            tiles[a - 1].innerText === tiles[b - 1].innerText &&
            tiles[a - 1].innerText === tiles[c - 1].innerText
        ) {
            gameOver = true;
            document.getElementById("game-over-text").innerText = `WINNER = ${tiles[a - 1].innerText}`;
            document.getElementById("game-over-area").classList.remove("hidden");
            break;
        }
    }
}

function startNewGame() {
    tiles.forEach((tile) => tile.innerText = "");
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("game-over-area").classList.add("hidden");
}
