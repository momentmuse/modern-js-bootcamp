const Answer = function (word, guesses) {
    this.word = word;
    this.guesses = guesses;
}

const game1 = new Answer('pineapple', 5)
const game2 = new Answer('vacation', 3)

console.log(game1)
console.log(game2)