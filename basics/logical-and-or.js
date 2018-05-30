let temp = 23

// && true if both sides are true, else false
// || true if at least one side is true, else false

if (temp >=20 && temp <= 30) {
    console.log('Perfect weather!')
} else if (temp <= -40 || temp >= 40) {
    console.log('It\'s dangerous out there!')
} else {
    console.log('I\'m hungry.')
}

//Challenge time!

console.log('********Going out to eat********')

let guest1Vegan = true;
let guest2Vegan = false;

if (guest1Vegan && guest2Vegan) {
    console.log('Here is our fully vegan menu!')
} else if (guest1Vegan || guest2Vegan) {
    console.log('Here are some of our vegan options!')
} else {
    console.log('Here are your menus.')
}