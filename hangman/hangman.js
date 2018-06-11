 const Answer = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = '';
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
    
    if (correct) {
        this.status = 'finished';
    } else if (this.remainingGuesses <= 0) {
        this.status = 'failed';
    } else {
        this.status = 'playing';
    }

    console.log(this.status)     
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
    this.getGameStatus();
}