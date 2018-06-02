//Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
//notes does not exist here, so change 'notes =' to return
        return JSON.parse(notesJSON);
    } else {
//if notesJSON does === null, return empty array
        return []
    }
}

//Create notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate the DOM structure for a note
//argument note will be passed in from the notes-app.js file
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('span')
    const button = document.createElement('button');

//Set up remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)

//Set up note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
    noteElement.appendChild(textElement)

    return noteElement
}

//Render application notes
const renderNotes = function (notes, inputFilters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(inputFilters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement);
    })
}