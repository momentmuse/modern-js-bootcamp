let notes = getSavedNotes()

const inputFilters = {
    searchText: ''
}

renderNotes(notes, inputFilters);

document.querySelector('#create-note-button').addEventListener('click', function(e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    inputFilters.searchText = e.target.value;
    renderNotes(notes, inputFilters);
});

document.querySelector('#filter-by').addEventListener('change',function(e) {
    console.log(e.target.value)
});

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, inputFilters);
    }
})