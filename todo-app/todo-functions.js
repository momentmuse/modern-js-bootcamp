//Fetch existing todos from localStorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

//Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Render application todos based on filters
const renderTodos = function(todos, inputFilters) {
    const filteredTodos = todos.filter(function(todo) {
    //variable to verify if text input matches todo's text    
        const matchSearchTodos = todo.text.toLowerCase().includes(inputFilters.searchTodos.toLowerCase());
    //varible using ternary operator to verify whether todo to display matches hide completed checkbox parameters
    //in pseudocode: if hide completed checkbox is checked (ie, return completed = false), then return !todo.completed (todo completed = false)
    //else, if checkbox is not checked, return true (ie, return true for all elements searched, display all)
        const matchHideCompleted = inputFilters.hideCompleted ? !todo.completed : true;
    //return the elements that fullfill the criteria of const matchSearchTodos AND const matchHideCompleted
        return  matchSearchTodos && matchHideCompleted;
    });

    const todosLeft = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });
    
    document.querySelector('#todo-list').innerHTML = '';
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(todosLeft));

    filteredTodos.forEach(function(todo) {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo));
    });
}

//Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    return p;
}

//Get the DOM elements for list summary
const generateSummaryDOM = function(todosLeft) {
    const todosLeftAlert = document.createElement('h2');
    todosLeftAlert.textContent = `You have ${todosLeft.length} todos remaining.`;
    return todosLeftAlert;
}