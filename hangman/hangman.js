// 1. Disable new guesses unless status = 'playing'
// 2. Set up a new method to get back a status message 

//Playing --> Guesses left: 5
//Finished --> Great work! You guessed the word.
//Failed --> Nice try! The word was 'pineapple'.
 
 const Answer = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
}

Answer.prototype.getGameStatus = function () {
 //every Method
 //evaluates to true if every value in array passes test in curly brackets, else evaluates to false
 //remember you must return the value (this is shortened arrow function syntax, so curly braces and 'return' keyword are removed)
    const correct = this.word.every((char) => this.guessedLetters.includes(char))

//  //filter Method
//     const unguessedLetters = this.word.filter((char) => {
//         return !this.guessedLetters.includes(char)
//     })   

//  //forEach Method   
//     let correct = true;
//     this.word.forEach((char) => {
//         if (!this.guessedLetters.includes(char)) {
//             correct = false;
//         }
//     })
    
    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (correct) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }

    console.log(this.status)     
}

Answer.prototype.getStatusMessage = function() {
    if (this.status === 'failed') {
       return `Nice try! The answer was ${this.word.join('')}.`;
    } else if (this.status === 'finished') {
        return `Great job! You win!`;
    } else if (this.status === 'playing') {
        return `${game1.remainingGuesses} guesses left`;
    }
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
//This wasn't the solution I was expecting. If the status on the new game object (see app.js to see answer constructor) is not equal to playing, simply return undefined, ie, short-circuit and skip all the code beneath it
    if (this.status !== 'playing') {
        return
    }

    if (uniqueGuess) {
        this.guessedLetters.push(guess);
    }

    if (uniqueGuess && badGuess) {
        this.remainingGuesses--;
    }
    this.getGameStatus();
}