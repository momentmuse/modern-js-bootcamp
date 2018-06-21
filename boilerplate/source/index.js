import defaultSquare, { add, name } from './utilities.js';
import defaultYell from './yell.js';

console.log('index.js');

console.log(add(12, 36));
console.log(name);
console.log(defaultYell(`hey there ${name}`));
console.log(defaultSquare(10));