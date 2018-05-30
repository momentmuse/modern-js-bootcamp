//creating objects
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//reading property values
console.log(`${myBook.title} by ${myBook.author}`)

//changing property values
myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge area

let myPet = {
    name: 'Gatsby',
    age: 6,
    location: 'Ottawa'
}

console.log(`${myPet.name} is ${myPet.age} and lives in ${myPet.location}.`)

myPet.age++

console.log(`${myPet.name} is ${myPet.age} and lives in ${myPet.location}.`)