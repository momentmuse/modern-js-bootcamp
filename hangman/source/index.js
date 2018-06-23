import Answer from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1 = '';

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
})

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3');
    game1 = new Answer(puzzle, 6)
    render();
}

startGame();

document.querySelector('#resetPuzzle').addEventListener('click', startGame);