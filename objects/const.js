//you cannot reassign constant values!

const isRaining = true;
// isRaining = false;

console.log(isRaining)

const person = {
    age: 27,
}
console.log(person)

person.age += 1;
// person = {} this is invalid

console.log(person)

//constants are used for code readability.
//use of const shows that the variable will not change
