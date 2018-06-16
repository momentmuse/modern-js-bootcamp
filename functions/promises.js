//Callback Example
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num*2)
        } else {
            callback('Number must be provided', undefined)
        }
    }, 2000)
};

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err);
    } else {
//callback hell!! recursive callbacks?? nested...
//omg I can't read this
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err');
            } else {
                console.log(data);
            }
        })
    }
})
//you might accidentally call your callback more than once

//Promise Example
//call resolve to set return data
//call reject to set error

//shorthand syntax for a function that returns a promise (note that we removed return {})
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
       typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 3000)
});

//by abstracting the function away into a new variable, it becomes more composable
//you can pass in new arguments and use those arguments in the function itself
const myPromise = getDataPromise(123);

//promise nesting
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`The nested promise data is: ${data}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})

//first function will fire if Promise resolved, otherwise second function will fire
//passing result of first call of getDataPromise into getDataPromise again, return resuling value and chain it
getDataPromise(15).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(`The promise chain data is: ${data}`);
//use catch for Promise chaining
}).catch((err) => {
    console.log(err);
})
//code doesn't get more complex when you Promise chain, unlike callbacks or promise nesting