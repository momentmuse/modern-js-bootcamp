//The REST Parameter!
//the rest parameter allows you to represent an indefinite number of arguments as an array
const calculateAvg = (avgValue, ...numbers) => {
    //return (numOne + numTwo) / 2;
    let sum = 0;
    numbers.forEach((num) => sum += num)
    const avg =  sum / numbers.length;
    return `The average ${avgValue} is ${avg}`;
}

console.log(calculateAvg('grade', 0, 100, 88, 64))


const printTeam = (teamName, coachName, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coachName}`);
    console.log(`Players: ${players.join(', ')}`);
}

//What if this is the input we have to work with, and we can't change the function?
const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

//The SPREAD operator!
//Spread opertor allows you to spread out an array into individual arguments
printTeam(team.name, team.coach, ...team.players);

//These two are the same
const cities = ['Barcelona', 'San Francisco', 'Vancouver']
const citiesSpreadCopy = [...cities]

//add stuff to the copy!
citiesSpreadCopy.push('Tokyo');

//another way to add stuff
const citiesSpreadCopy2 = [...cities, 'Tokyo'] //just like .push()


//the Object SPREAD order!
let house = {
    bedrooms: 3,
    bathrooms: 2.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 4
}

console.log(house);
console.log(newHouse)

let person = {
    name: 'Amy',
    age: 27
}

let location = {
    city: 'Ottawa',
    country: 'Canada'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)