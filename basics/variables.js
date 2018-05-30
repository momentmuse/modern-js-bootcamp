// 1. You can't define a variable more than once
let petName = 'Gatsby'
let petName = 'Potato' //invalid

let catName = 'Gatsby'
catName = 'Bartholomew' //valid

console.log(petName)

// 2. There are rules related to variable names
// it must start with letters, $, or _

let 3 = 2 //invalid
let _3 = "banana" //valid

// 3. Variable names cannot be reserved keywords

let let = 42 //invalid
let bed = "sleep"

// BONUS! Semicolons at the end of lines are optional;