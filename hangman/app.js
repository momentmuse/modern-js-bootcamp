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

//Making an HTTP request
//the name of this constructor function (XMLHttpRequest) is irrelevant; you can use it to transfer any type of data you want, including JSON data
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log('Something is broken! Sorry :(')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();