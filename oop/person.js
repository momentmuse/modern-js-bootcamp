console.log('************Prototypal Inheritance & Constructor Functions************')
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
//no need to retun anything because the new operator will create a new object
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`
//arrow function does not bind 'this'
    this.likes.forEach((like) => {
//in inner level, 'this' refers to the same value that parent 'this' refers to, ie, const Person
        bio += ` ${this.firstName} likes ${like}.`
    });
    return bio
}

Person.prototype.setName = function(fullName) {
     const names = fullName.split(' ');
     this.firstName = names[0];
     this.lastName = names[1];
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

console.log('*************The Class Syntax!*************')
//alternative to old object definition syntax as seen above
//note that it uses function literals, not properties

class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
//there is no comma after the constructor function
//how to define methods for class
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
        return bio;
    }
//insert a setter to directly manipulate property fullName
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Cat extends Person {
    constructor(firstName, lastName, age, breed, likes) {
//must include reference to super constructor arguments that you will take in
//you cannot remove properties, only add new ones **i think** 
        super(firstName, lastName, age, likes);
        this.breed = breed;
    }
//getBio has been overwritten
    getBio() {
        let likesString = this.likes.join(", ");
        return `Meow meow mmeeeowww mrroww! (${this.fullName} loves ${likesString}!)`
    }
    getCatYears() {
        return this.age * 6
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        return this.grade >= 70 ? `${this.firstName} is passing with ${this.grade}` : `${this.firstName} is failing with ${this.grade}`;
    }
    updateGrade(change) {
        this.grade += change;
    }
}

const aNewPerson = new PersonClass('Amy', 'Kirasack', 27, ['cats', 'computers']);
console.log(aNewPerson.getBio());
aNewPerson.fullName = 'Catsbee Meowmeow';
console.log(aNewPerson.getBio());

//order of arguments must align with extends constructor
const aCat = new Cat('GatsGats', 'Fluffykins', 6, 'bicolor tabby', ['chicken', 'napping', 'belly rubs']);
console.log(aCat);
//the get fullName works, but firstName and lastName remain unchanged. Why?
aCat.fullName = 'Catsbee Meowmeow';
console.log(aCat.getBio());
console.log(`firstName and lastName properties are set to: ${aCat.firstName} ${aCat.lastName}, but fullName is set to ${aCat.fullName}.`);
console.log(aCat.getCatYears());

const aStudent = new Student('Pusheen', 'Een', 12, 67)
console.log(aStudent.getBio());
aStudent.updateGrade(20);
//this doesn't work in the extended class. why?
aStudent.fullName = 'Catsbee Meowmeow';
console.log(aStudent.getBio());