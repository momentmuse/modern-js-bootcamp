const Answer = function (word, remainingGuess) {
    this.word = word.toLowerCase().split('');
    this.remainingGuess = remainingGuess;
    this.guessedLetters = ['p'];
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

const game1 = new Answer('pineapple', 5)
const game2 = new Answer('vacation', 3)


console.log(game1.getPuzzle())
console.log(game2)