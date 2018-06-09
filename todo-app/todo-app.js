'use strict'

const todos = getSavedTodos()

const inputFilters = {
    searchTodos: '',
    hideCompleted: false
}

renderTodos(todos, inputFilters);

document.querySelector('#filter-todos-text-input').addEventListener('input', (e) => {
    inputFilters.searchTodos = e.target.value;
    renderTodos(todos, inputFilters);
});

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodoTextInput.value,
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, inputFilters);
    e.target.elements.newTodoTextInput.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    inputFilters.hideCompleted = e.target.checked;
    //if checkbox is checked, hideCompleted = true; display !todo.completed
    //if checkbox is unchecked, hideCompleted = false; display all (todo.completed && !todo.completed; all true)
    renderTodos(todos, inputFilters);
});