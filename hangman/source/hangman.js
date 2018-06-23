class Answer {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    getGameStatus() {
        const correct = this.word.every((char) => this.guessedLetters.includes(char) || char === ' ')
    //fixes logic bug if puzzle has a space in it

        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (correct) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
        console.log(this.status)     
    }
    get statusMessage() {
        if (this.status === 'failed') {
            return `Nice try! The answer was ${this.word.join('')}.`;
         } else if (this.status === 'finished') {
             return `Great job! You win!`;
         } else if (this.status === 'playing') {
             return `${this.remainingGuesses} guesses left`;
         }
    }
    get puzzle() {
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
//don't forget! when refactoring code to use class syntax, include any parameters in the functions    
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const uniqueGuess = !this.guessedLetters.includes(guess);
        const badGuess = !this.word.includes(guess);
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
}

export { Answer as default };