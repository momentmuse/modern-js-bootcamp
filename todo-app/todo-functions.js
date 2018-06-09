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
    
    document.querySelector('#todo-list').innerHTML = '';
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(todosLeft));

    filteredTodos.forEach((todo) => {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo));
    });
}

//Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

//Set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    todoElement.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
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
    todosLeftAlert.textContent = `You have ${todosLeft.length} todos remaining.`;
    return todosLeftAlert;
}