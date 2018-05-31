let notes = [];

//everything is broken idk why
//the course example .js file is even broken


const inputFilters = {
    searchText: ''
}

//check for existing saved data
//OMG ANDREW MEAD MADE AN ERROR HERE
//I USED THE DEBUGGER AND TONS OF CONSOLE LOGS AND STACKOVERFLOW AND FIGURED IT OUT YAY I AM SO RESOURCEFUL
//getItem(notes) should not have ('notes')!!!
const notesJSON = localStorage.getItem(notes)

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
}

const renderNotes = function (notes, inputFilters) {
//error: notes.filter is not a function: because we're calling it on a string! why is notes = 'notes'? 
//let's console log lines above ths, before the function is exectured to determine the value of notes and why it changes to a string
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(inputFilters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p');
        
        if (note.title.length > 0) {
            noteElement.textContent = note.title
        } else {
            noteElement.textContent = 'Unnamed note'
        }
        
        document.querySelector('#notes').appendChild(noteElement);
    })
}

renderNotes(notes, inputFilters);

document.querySelector('#create-note-button').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, inputFilters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    inputFilters.searchText = e.target.value;
    renderNotes(notes, inputFilters);
});

document.querySelector('#filter-by').addEventListener('change',function(e) {
    console.log(e.target.value)
});