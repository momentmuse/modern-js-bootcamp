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
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


// const countryCode = "CA";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((country) => country.alpha2Code === countryCode);
//         console.log(country.name);
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data');
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();