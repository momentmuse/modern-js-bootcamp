const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Paris'
}, {
    title: 'Habits to work on',
    body: 'Meditation. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]

const inputFilters = {
    searchText: ''
}

const renderNotes = function (notes, inputFilters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(inputFilters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const filteredNoteElement = document.createElement('p');
        filteredNoteElement.textContent = note.title;
        document.querySelector('#notes').appendChild(filteredNoteElement);
    })
}

renderNotes(notes, inputFilters);

document.querySelector('#create-note-button').addEventListener('click', function(e) {
    e.target.textContent = 'Button was clicked!';
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    inputFilters.searchText = e.target.value;
    renderNotes(notes, inputFilters);
});

document.querySelector('#filter-by').addEventListener('change',function(e) {
    console.log(e.target.value)
});