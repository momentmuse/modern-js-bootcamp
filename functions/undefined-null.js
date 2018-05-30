//undefined represents the absence of a value
//undefined for variable
let name

name = 'Gatsby'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

//undefined for function arguments
//undefined as the function return default value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

//null as assigned value, explicitly cleared
let age = 27

age = null

console.log(age)
