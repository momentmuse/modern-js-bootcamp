const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
       typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 1000)
});

//ASYNC FUNCTIONS!
//async functions always always always return a promise
//async/await allows us to structure promises that look more like regular synchronous code
const processData = async () => {
    let data = await getDataPromise(22)
//doubled twice using await (vs. Promise chaining)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log(`Promise was resolved with ${data}`);
}).catch((err) => {
    console.log(`Catch error is: ${err}`);
})
//promise is resolved with a value that you return from the function