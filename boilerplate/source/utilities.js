//Name export: we can have as many of these as we need
//Default export: we can only have one (at most)
//You can use both name and defaults exports for importing

const add = (a, b) => a + b;

const name = 'Amy';

const square = (x) => x * x;

//one line for all exports
export { add, name, square as default };