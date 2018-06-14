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
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is the Promise data');
        reject('This is my Promise ERROR!')
    }, 3000)
});

//what do do when we actually have the data
//function is called when the Promise is resolved
//this function ONLY fires when data resolves.
myPromise.then((data) => {
    console.log(data);
}, (err) => {
//needs more parameters for error case
    console.log(err);
})
//you cannot call your Promise more than once (can't reject then resolve, resolve twice, etc.)
//you don't have to know what you do with the code before you start the process of fetching the information