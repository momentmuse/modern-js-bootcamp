const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    }
}

const counter = createCounter();
counter.decrement();
counter.increment();
counter.decrement();
console.log(counter.getCount());

//Non-curried adder
const add = (a, b) => a + b;

//Curried Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(23));
const add100 = createAdder(100);
console.log(add100(-2));
console.log(add100(23));

//currying: transforming a single function that takes a lot of arguments to multiple functions that take a subset of those arguments

//Tipper
// 1. Create createTipper which takes in the base tip
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (tip) => {
    return (bill) => {
        return bill += bill * tip;
    }
}

const tip15 = createTipper(.15);
console.log(tip15(10));
console.log(tip15(40));
const tip25 = createTipper(.25);
console.log(tip25(20));
console.log(tip25(50));