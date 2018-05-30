//Global scope (converToCelsius, tempOne, tempTwo)
    //Local scope (ftemp, ctemp)
        //Local scope (isFreezing)

let convertToCelsius = function(ftemp) {
    let ctemp = (ftemp - 32) / 1.8
    if(ctemp <= 0) {
        let isFreezing = true
    }
    return ctemp
}

let tempOne = convertToCelsius(32)
let tempTwo = convertToCelsius(68)

console.log(final)
console.log(otherFinal)