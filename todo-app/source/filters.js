const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters;

const setFilters = (updates) => {
    if (typeof updates.searchTodos === 'string') {
        filters.searchTodos = updates.searchTodos;
    }
    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted;
    }
}

export { getFilters, setFilters }