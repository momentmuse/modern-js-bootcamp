//Delete dummy data
//Read and parse the data when the app starts up
//Stringify and write data when new data is added

let todos = [{
    text: 'Study Javascript',
    completed: false
}, {
    text: 'Feed Gatsby',
    completed: true
}, {
    text: 'Order textbooks',
    completed: false
}, {
    text: 'Clean litterbox',
    completed: false
}, {
    text: 'Work out',
    completed: true
}]

//for filter todos START

const inputFilters = {
    searchTodos: '',
    hideCompleted: false
}

//read from local storage
//ok I guess it needs quotes? 
//what's going on? why didn't it work last time?
const todosJSON = localStorage.getItem('todos')

//take our string and get back an array
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}

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

    const todosLeftAlert = document.createElement('h2');
    todosLeftAlert.textContent = `You have ${todosLeft.length} todos remaining.`;
    document.querySelector('#todo-list').appendChild(todosLeftAlert);

    filteredTodos.forEach(function(todo) {
        const todoLi = document.createElement('p');
        todoLi.textContent = todo.text;
        document.querySelector('#todo-list').appendChild(todoLi);
    });
}

renderTodos(todos, inputFilters);

document.querySelector('#filter-todos-text-input').addEventListener('input', function(e) {
    inputFilters.searchTodos = e.target.value;
    renderTodos(todos, inputFilters);
});

//for add todos START

document.querySelector('#new-todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.newTodoTextInput.value,
        completed: false
    });
//create in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, inputFilters);
    e.target.elements.newTodoTextInput.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    inputFilters.hideCompleted = e.target.checked;
    //if checkbox is checked, hideCompleted = true; display !todo.completed
    //if checkbox is unchecked, hideCompleted = false; display all (todo.completed && !todo.completed; all true)
    renderTodos(todos, inputFilters);
});