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


// //Primitive values: string, number, boolean, null, undefined

// //Prototypal Chains (for objects)
// //Object: myObject --> Object.prototype --> null
// //Array: myArray --> Array.prototype --> Object.prototype --> null
// //Function = myFunc --> Function.prototype --> Object.prototype --> null
// //String: myString --> String.prototype --> Object.prototype --> null
// //Number: myNumber --> Number.prototype --> Object.prototype --> null
// //Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// //String Example
// const product = 'Computer'
// console.log(product)

// //When we access a method on a primitive, it converts it to an object ('object wrapper'), and calls the method on object

// const otherProduct = new String('iPhone')
// console.log(otherProduct)