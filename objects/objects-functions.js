let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    pageCount: 237
}

let anotherBook = {
    title: 'House of Leaves',
    author: 'Mark Z. Danielewski',
    pageCount: 709
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary0 = getSummary(myBook)
let bookSummary1 = getSummary(otherBook)
let bookSummary2 = getSummary(anotherBook)

console.log(bookSummary1)

//Challenge area
//Create function - take fahrenheit in - return object with all three

console.log('***********CALC TEMP OBJECT PRACTICE***********')

let convertToCK = function(ftemp) {
    return {
        fahrenheit: ftemp,
        celsius: (ftemp - 32) * (5/9),
        kelvin: (ftemp + 459.67) * (5/9)
    }
}

let firstTemp = convertToCK(32)
let secondTemp = convertToCK(68)
let thirdTemp = convertToCK(74)

console.log(firstTemp.kelvin)
console.log(secondTemp.celsius)
console.log(thirdTemp)