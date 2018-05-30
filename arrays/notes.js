const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Paris'
}, {
    title: 'Habits to work on',
    body: 'Meditation. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]

// console.log(notes.pop()) //+end
// notes.push('my new note') //-end
// //you actually get the removed item back as a return value

// notes.unshift('wow so cute') //+beginning
// notes.shift() //-beginning
// //also returns removed item

// notes.splice(1, 0, 'this is the new second item')

//start at index 1 and remove 1 item
//if you set second argument to 0, then you can add a new item (third argument) at the position provided first argument

// notes.splice(1, 1, 'replace note 2')
//this will replace the second item

// notes[2] = 'this is now the new note 3'
//reassign a value to an item

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })
//callback function: a function that gets passed to a function

console.log('*********LAST FEW LOGS********')
console.log(`The notes array has a length of ${notes.length} items.`)
console.log(notes)

// //Counting ...1
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i])
// }

// console.log('************FOR INDEXOF***********')
// let searchArray = '{}'
// console.log(`${searchArray} has an index of ${notes.indexOf(searchArray)}.`)
//this will return the position of this item
//if it doesn't exist, we'll get -1

//objects are only equal to other objects if they are referring to the same object. 
// let someFood = {type: potato}
// let moreFood = someFood
// moreFood === someFood

// it does not matter if they have the same properties and values
// {type: potato} !== {type: potato}

// console.log('*************FINDINDEX for OBJECTS***************')
// //findIndex looks for the first match it finds
// const index = notes.findIndex(function(item, index) {
//     console.log(item)
//     return item.title === 'Habits to work on'
// })
// console.log(index)

console.log('************SEARCHING ARRAYS PT2************')

//.find returns the item itself, instead of the item's index like findIndex does
function findNote (objArray, noteTitle) {
    return objArray.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

console.log(findNote(notes, 'office modification'))


console.log('************FILTERING ARRAYS************')

const findNotes = function(notes, query) {
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })    
}

console.log(findNotes(notes, 'to'))

// function findNote (objArray, noteTitle) {
//     const index = objArray.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

console.log('************SORTING ARRAYS************')

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return - 1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)