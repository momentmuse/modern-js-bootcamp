const todos = [{
    text: 'study Javascript',
    completed: false
}, {
    text: 'feed Gatsby',
    completed: true
}, {
    text: 'order textbooks',
    completed: false
}, {
    text: 'clean litterbox',
    completed: false
}, {
    text: 'work out',
    completed: true
}]

// //delete the third item
// todos.splice(2, 1)
// //add a new item onto the end
// todos.push('buy groceries')
// //remove the first item
// todos.shift()

// console.log(`You have ${todos.length} todos left.`)

// console.log('**********FOR EACH***********')
// todos.forEach(function(item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// console.log('**********FOR LOOP***********')
// for (let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }
// //for loop better for when you don't have an array or want to count in a particular order

// identify item by content (case insensitive)
// find index of said item
// delete item by index if index > -1
// console.log remaining todos   
 
// console.log('************SEARCHING ARRAYS PT2************')
// function deleteTodo(todos, todoText) {
//     const index = todos.findIndex(function(obj) {
//         return obj.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// deleteTodo(todos, 'study javascript')
// console.log(todos)

// console.log('************FILTERING ARRAYS************')


// //use arr.filter to match completed value to false
// //return items with value = false
// //define outer function getThingsToDo with argument array

// const getThingsToDo = function(todos) {
//     return todos.filter(function(todo, index) {
//         // const isValueFalse = todo.completed
//         // return isValueFalse
//         return !todo.completed
//     })    
// }

// //should filter an array with completed value == false
// console.log(getThingsToDo(todos))

console.log('************SORTING ARRAYS************')

//use arr.sort method to sort false (a) < true (b)
//define if, else if, and else condition for TF
//wrap in const sortTodos function

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed < b.completed) {
            return -1 //a is less than b by some ordering criterion (keep the order)
        } else if (b.completed < a.completed) {
            return 1 //a is greater than b by the ordering criterion (flip the order)
        } else {
            return 0
        }
    })
}

//note: these conditionals look different from the ones in the video.
//this is because I tested console.log(false < true), which equals true.
//thus, according to the sort method, boolean false will be sorted before true.

sortTodos(todos)
console.log(todos)
