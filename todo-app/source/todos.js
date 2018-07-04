import uuidv4 from 'uuid/v4';

let todos = [];

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        todos = [];
    }
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => todos;

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos();
}

// createTodo
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports