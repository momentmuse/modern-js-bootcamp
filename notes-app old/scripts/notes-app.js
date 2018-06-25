'use strict'

let notes = getSavedNotes();

const inputFilters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, inputFilters);

document.querySelector('#create-note-button').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    inputFilters.searchText = e.target.value;
    renderNotes(notes, inputFilters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    inputFilters.sortBy = e.target.value;
    renderNotes(notes, inputFilters);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, inputFilters);
    }
})