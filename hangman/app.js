const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Answer('pineapple', 5);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = `${game1.remainingGuesses} guesses left`;

console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);

    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = `${game1.remainingGuesses} guesses left`;
})