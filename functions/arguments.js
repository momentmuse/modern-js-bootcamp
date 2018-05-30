//Multiple arguments
let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function(name = 'anon', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Amy', 99)
console.log(scoreText)

//Challenge area
console.log('***********TIP CALCULATOR***********')

//total, tipPercent default 0.2
let getTip = function(total, tip = 0.2) {
    let sum = total + (total * tip)
    let tipPercent = tip * 100
    return `A ${tipPercent}% tip on $${total} would add up to $${sum}.`
}

let afterTip = getTip(80)
let afterTip2 = getTip(60, 0.25)
console.log(afterTip)
console.log(afterTip2)

// console.log('***********STRING TEMPLATE***********')

// let name = 'Gatsby'
// let age = 6
// console.log(`Hey, my name is ${name}! I am ${age} years old.`)