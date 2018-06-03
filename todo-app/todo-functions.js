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

//Remove todo by id
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

//Toggle completed value for a todo
const toggleTodo = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id;
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
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
    const todoElement = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

//Set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    todoElement.appendChild(checkbox);
    checkbox.addEventListener('change', function() {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, inputFilters);
    })

//Set up the todo text
    todoText.textContent = todo.text;
    todoElement.appendChild(todoText);

//Set up the remove button
    removeButton.textContent = 'x';
    todoElement.appendChild(removeButton);
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, inputFilters);
    })

    return todoElement;
}

//Get the DOM elements for list summary
const generateSummaryDOM = function(todosLeft) {
    const todosLeftAlert = document.createElement('h2');
    todosLeftAlert.textContent = `You have ${todosLeft.length} todos remaining.`;
    return todosLeftAlert;
}