//HTTP = Hypertext Transfer Protocol Secure
//fetch
//Request: What we want to do
//Response: What was actually done

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

// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(err);
// })

// getCountry('JP').then((country) => {
//     console.log(`Input country name is: ${country.name}`);
// }).catch((err) => {
//     console.log(`We found an error: ${err}`);
// })

// getCurrentCountry().then((country) => {
//     console.log(`Async/await says you are in: ${country.name}`);
// }).catch((error) => {
//     console.log(error);
// })

// getLocation().then((location) => {
//     console.log(`You are located in ${location.city}, ${location.region}, ${location.country}.`);
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error);
// })