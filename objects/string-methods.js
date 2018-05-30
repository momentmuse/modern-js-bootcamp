let name = 'Amy Kirasack';

//length property
console.log(name.length)

// Convert to uppercase method
//doesn't take arguments, it takes your string
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

//includes method
let pass = 'abc123catsarecute'
console.log(pass.includes('password'))

//trim method removes extra whitespace from a string
let input = "  so many spaces   "
console.log(input.trim())

console.log('**********CHALLENGE AREA!**********')

//isValidPassword = true
//length > 8 && != include password
// function isValidPassword(myPass) {
//     if (myPass.includes('password') ||
//     myPass.length < 9) {
//         return false
//     } else {
//         return true
//     }
// }

//using logical not statement
function isValidPassword(myPass) {
    return myPass.length > 8 && !myPass.includes('password')
}

console.log(isValidPassword('abc12'))
console.log(isValidPassword('password'))
console.log(isValidPassword('hipasswords10yay'))
console.log(isValidPassword('whataniceday90'))
console.log(isValidPassword('lalalaladeeda24'))
