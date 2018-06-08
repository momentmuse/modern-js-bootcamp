const getTip = (amount) => { 
    if (typeof amount === 'number') {
        return amount * .25;
    } else {
        throw Error('Argument amount must be a number');
    }
};


//save the program from erroring out
try {
//the console will coerce the Boolean value to a number and pass it through getTip
    const result = getTip(10);
    console.log(result);
//catch only runs when there is an error
} catch (e) {
    console.log('catch block is running')
}


