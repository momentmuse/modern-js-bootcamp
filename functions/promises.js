//Callback Example
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the callback data');
    }, 2000)
};

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data);
    }
})
//you might accidentally call your callback more than once

//Promise Example
//call resolve to set return data
//call reject to set error

//shorthand syntax for a function that returns a promise (note that we removed return {})
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is the resolved Promise data: ${data}`);
        // reject('This is my Promise ERROR!');
    }, 3000)
});

//by abstracting the function away into a new variable, it becomes more composable
//you can pass in new arguments and use those arguments in the function itself
const myPromise = getDataPromise(123);


//what do do when we actually have the data
//function is called when the Promise is resolved
//this function ONLY fires when data resolves.
myPromise.then((data) => {
    console.log(data);
}, (err) => {
//needs more parameters for error case
    console.log(err);
})
//you cannot resolve or reject or promise more than once in the same call
//you don't have to know what you do with the code before you start the process of fetching the information

//another call
myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})