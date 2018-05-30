var firstName = 'Amy'
firstName = 'Jasmine'

//with var, you can recreate a variable that's already been declared
var firstName = 'Gatsby'
//easy to accidentally redeclare an already-created variable (it will overwrite)

console.log(firstName)

//var is function-scoped, not block-scoped
//they get exposed outside of the if statement
if (10 === 10) {
    var banana = 'fruit';
}
//block-scoped variables give you more flexibility

console.log(banana)

//LETS COMPARE
let age
console.log(age)
//this will be assigned undefined

var age1
console.log(age1)
//you'll have the same result

//what if you try to access a variable before it's been declared?

console.log(age2)
let age3
//you will get a reference error (makes sense)

console.log(age3)
var age3 = 10
//you'll get undefined, not an error
//decalarations will be hoisted with var
//the declaration, but not the value, will get hoisted
//wEEEiiirddd

//TLDR; don't use var because it's outdated and will make your code act strangely