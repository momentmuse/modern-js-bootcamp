const myAge = 27
const message = myAge >= 18 ? 'You can vote!' : 'Sorry, you can\'t vote.'

console.log(message)

const canDrink = () => {
    console.log('Come on in and have a drink!')
}

const cannotDrink = () => {
    console.log('You cannot enter!')
}

const drinkMessage = myAge >= 19 ? canDrink() : cannotDrink();

//CHALLENGE AREA!
const team = ['Dorkman', 'Fluffykins', 'Muesli']

//you can put the entire ternary operator inside a console.log!
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team!`)