import { renderTodos } from './views';
import { setFilters } from './filters';
import { createTodo } from './todos';

renderTodos();

document.querySelector('#filter-todos-text-input').addEventListener('input', (e) => {
    setFilters({
        searchTodos: e.target.value
    })
    renderTodos();
});

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
    const todoText = e.target.elements.newTodoTextInput.value.trim()
    e.preventDefault();

    if (todoText.length > 0) {
        createTodo(text);
        renderTodos();
        e.target.elements.newTodoTextInput.value = '';
    }
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    //if checkbox is checked, hideCompleted = true; display !todo.completed
    //if checkbox is unchecked, hideCompleted = false; display all (todo.completed && !todo.completed; all true)
    renderTodos();
});