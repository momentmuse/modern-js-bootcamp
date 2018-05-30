// function - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome, user!')
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//Challenge area!

console.log('*********Temp Converter F --> C ********')

//Convert f to c
let convertToCelsius = function(ftemp) {
    let ctemp = (ftemp - 32) / 1.8
    return ctemp
}

//call a couple of times (32 --> 0; 68 --> 20)
let final = convertToCelsius(32)
let otherFinal = convertToCelsius(68)

//Print the converted values
console.log(final)
console.log(otherFinal)