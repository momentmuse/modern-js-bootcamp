'use strict'

//Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

//Toggle completed value for a todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

//Render application todos based on filters
const renderTodos = (todos, inputFilters) => {
    const todoListElement = document.querySelector('#todo-list')
    const filteredTodos = todos.filter((todo) => {
    //variable to verify if text input matches todo's text    
        const matchSearchTodos = todo.text.toLowerCase().includes(inputFilters.searchTodos.toLowerCase());
    //varible using ternary operator to verify wheer todo to display matches hide completed checkbox parameters
    //in pseudocode: if hide completed checkbox is checked (ie, return completed = false), then return !todo.completed (todo completed = false)
    //else, if checkbox is not checked, return true (ie, return true for all elements searched, display all)
        const matchHideCompleted = inputFilters.hideCompleted ? !todo.completed : true;
    //return the elements that fullfill the criteria of const matchSearchTodos AND const matchHideCompleted
        return  matchSearchTodos && matchHideCompleted;
    });

    const todosLeft = filteredTodos.filter((todo) => !todo.completed);
    
    todoListElement.innerHTML = '';
    todoListElement.appendChild(generateSummaryDOM(todosLeft));

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoListElement.appendChild(generateTodoDOM(todo));
        });
    } else {
        const messageElement = document.createElement('p');
        messageElement.classList.add('empty-message');
        messageElement.textContent = "You have no todos left. Cool!";
        todoListElement.appendChild(messageElement);
    }
}

//Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('label');
    const containerElement = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

//Set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    containerElement.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, inputFilters);
    })

//Set up the todo text
    todoText.textContent = todo.text;
    containerElement.appendChild(todoText);

//Set up container
    todoElement.classList.add('list-item');
    containerElement.classList.add('list-item__container');
    todoElement.appendChild(containerElement);

//Set up the remove button
    removeButton.textContent = 'delete';
    removeButton.classList.add('button', 'button--text');
    todoElement.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, inputFilters);
    })

    return todoElement;
}

//Get the DOM elements for list summary
const generateSummaryDOM = (todosLeft) => {
    const todosLeftAlert = document.createElement('h2');
    const plural = todosLeft.length === 1 ? '' : 's';
    todosLeftAlert.classList.add('list-title');
    todosLeftAlert.textContent = `You have ${todosLeft.length} todo${plural} remaining.`;
    return todosLeftAlert;
}