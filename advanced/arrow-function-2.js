//Regular Functions vs Arrow Functions

const add = function() {
//inside of all regular functions, we have access to arguments
    console.log(arguments);
    return arguments[0] + arguments[1];
}

console.log(add(11, 22, 33, 44))

const addArrow = () => {
        return arguments[0] + arguments[1];
    }

//console.log(addArrow(11, 22, 33, 44))
//this will not work, as you cannot access arguments in arrow functions
//'local function does not bind arguments'

//Also, arrow functions don't bind 'this' value
//regular function form
const car = {
    color: 'rainbow colored',
    getSummary: function() {
        return `The car is ${this.color}!`;
    }
}

//arrow function form
const carArrow = {
    color: 'rainbow colored',
    getSummary: () => {
        return `The car is ${this.color}!`;
    }
}
//When you are creating methods on objects, you should use regular functions

console.log(car.getSummary())
console.log(carArrow.getSummary()) //this returns undefined