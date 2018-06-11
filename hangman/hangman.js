 const Answer = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
}

Answer.prototype.getPuzzle = function () {
    let puzzle = [];

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    })

    return puzzle;
}

Answer.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const uniqueGuess = !this.guessedLetters.includes(guess);
    const badGuess = !this.word.includes(guess);
    if (uniqueGuess) {
        this.guessedLetters.push(guess);
    }

    if (uniqueGuess && badGuess) {
        this.remainingGuesses--;
    }
}

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