//regular function
const square = function(x) {
    return x*x
}

//arrow function
//removed components: function
const sqr = (x) => {
    return x*x
}

//shorthand
//removed components: function { return }
const sq = (x) => x*x

const fruits = [{
    name: 'Banana',
    count: 14
}, {
    name: 'Pineapple',
    count: 3
}, {
    name: 'Watermelon',
    count: 8
}, {
    name: 'Strawberry',
    count: 12
}]

//full version
const fruitCount = fruits.filter(function(fruit) {
    return fruit.count > 10;
})

//arrow function version
const frtCnt = fruits.filter((fruit) => fruit.count > 10)

console.log(fruitCount);
console.log(frtCnt);

//CHALLENGE AREA
//find the fruit with count = 3
//print the fruit's name

//long version
const fruit = fruits.find(function(fruit) {
    return fruit.count === 3;
})

//arrow function version
const frt = fruits.find((frt) => frt.count === 3);

//remember the find method!!

console.log(fruit.name);
console.log(frt.name);