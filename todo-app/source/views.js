import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters } from './filters';

const renderTodos = () => {
    const todoListElement = document.querySelector('#todo-list')
    const { searchTodos, hideCompleted } = getFilters();
    const filteredTodos = getTodos().filter((todo) => {
        const matchSearchTodos = todo.text.toLowerCase().includes(searchTodos.toLowerCase());
        const matchHideCompleted = hideCompleted ? !todo.completed : true;
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
        renderTodos();
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
        renderTodos();
    })

    return todoElement;
}

const generateSummaryDOM = (todosLeft) => {
    const todosLeftAlert = document.createElement('h2');
    const plural = todosLeft.length === 1 ? '' : 's';
    todosLeftAlert.classList.add('list-title');
    todosLeftAlert.textContent = `You have ${todosLeft.length} todo${plural} remaining.`;
    return todosLeftAlert;
}

export { generateTodoDOM, renderTodos, generateSummaryDOM };