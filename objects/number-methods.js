let num = 9083.93219

//set a fixed number of decimal points
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0
let max = 6
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

console.log('**********CHALLENGE AREA***********')
//1 - 5 Number guessing game, true or false

function makeGuess(myGuess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return myGuess === randomNum;
}

console.log(makeGuess(5))
console.log(makeGuess(4))
console.log(makeGuess(3))
console.log(makeGuess(2))
console.log(makeGuess(1))