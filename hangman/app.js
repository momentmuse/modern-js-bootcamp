//product --> Object.prototype --> null
const product = new Object ({
    name: 'Eloquent Javascript'
})

Object.prototype.someNewMethod = () => 'This is a new method on Objects!'

//hasOwnProperty
console.log(product.someNewMethod());
console.log(product);