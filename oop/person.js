const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
//no need to retun anything because the new operator will create a new object
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
//arrow function does not bind 'this'
    this.likes.forEach((like) => {
//in inner level, 'this' refers to the same value that parent 'this' refers to, ie, const Person
        bio += ` ${this.firstName} likes ${like}.`
    });
    return bio
}

Person.prototype.setName = function (fullName) {
     const names = fullName.split(' ');
     this.firstName = names[0];
     this.lastName = names[0];
}

//convention to make constructor function with capital letter
const cat = new Person('Gatsby', 'Fluffykins', 6, ['chicken', 'sleeping'])
//functions that get used with new operator are constructor functions

//new operator does a few things:
//1. generates a new empty object for new instance
//2. gives us access to that object in the constructor function via 'this' value
console.log(cat.getBio())

const person2 = new Person('Clancey', 'Turner', 11)
person2.setName('Alexis Winter')
console.log(person2.getBio())