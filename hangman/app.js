//HTTP = Hypertext Transfer Protocol Secure
//Request: What we want to do
//Response: What was actually done

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Answer('pineapple cat', 5);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

console.log(game1.puzzle);
console.log(game1.remainingGuesses);

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);

    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

getPuzzle('3').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error: ${err}`);
});

getCountry('JP').then((country) => {
    console.log(`Country name is: ${country.name}`);
}, (error) => {
    console.log(`Error: ${error}`);
});