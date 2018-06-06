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

//Remove a note from the list
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

//Generate the DOM structure for a note
//argument note will be passed in from the notes-app.js file
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('a')
    const button = document.createElement('button');

//Set up remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function() {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, inputFilters);
    });

//Set up note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}

//Sort notes by one of three ways
const sortNotes = function(notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function(a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byNew') {
        return notes.sort(function(a, b) {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byAlpha') {
        return notes.sort(function(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        })
    }
}

//Render application notes
const renderNotes = function (notes, inputFilters) {
    notes = sortNotes(notes, inputFilters.sortBy);
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(inputFilters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement);
    })
}

const generateLastEdited = function(timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}