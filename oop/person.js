const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
//no need to retun anything because the new operator will create a new object
}

//convention to make constructor function with capital letter
const me = new Person('Gatsby', 'Fluffykins', 6)
//functions that get used with new operator are constructor functions

//new operator does a few things:
//1. generates a new empty object for new instance
//2. gives us access to that object in the constructor function via 'this' value

console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)

console.log(person2)