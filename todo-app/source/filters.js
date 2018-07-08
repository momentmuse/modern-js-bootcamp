const filters = {
    searchTodos: '',
    hideCompleted: false
}

const getFilters = () => filters;

const setFilters = ({ searchTodos, hideCompleted }) => {
    if (typeof searchTodos === 'string') {
        filters.searchTodos = searchTodos;
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted;
    }
}

export { getFilters, setFilters }