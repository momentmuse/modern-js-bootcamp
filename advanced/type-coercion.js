//Type Coercion: a string, number, or boolean
//avoid string abd number coercion as much as possible!

console.log('5' + 5)
//coerces string concatenation, outputs 55
console.log('5' - 2)
//coerces numerical subtraction, outputs 3
console.log('5' == 5)
//loose equality coerces type

//check type of variable with typeof
const checkDis = typeof 123 
//evaluates to string 'number'
console.log(typeof checkDis)
//outputs 'string'

console.log('*******************************')

const coerceMe = true + 12 / '5'
const type = typeof coerceMe;
console.log(coerceMe);
console.log(type);