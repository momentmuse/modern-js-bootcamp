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

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
})

getCountry('CA', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Country name is: ${country.name}`);
    }
})