'use strict'

//Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        //notes does not exist here, so change 'notes =' to return
        //if notesJSON does === null, return empty array
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

//Create notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

//Generate the DOM structure for a note
//argument note will be passed in from the notes-app.js file
const generateNoteDOM = (note) => {
    const noteElement = document.createElement('a');
    const textElement = document.createElement('p');
    const statusElement = document.createElement('p');

//Set up note title text
//changed from: (note.title.length > 0)
    if (note.title) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
    textElement.classList.add('list-item__title');
    noteElement.appendChild(textElement);

//Setup the link
    noteElement.setAttribute('href', `/edit.html#${note.id}`);
    noteElement.classList.add('list-item');

//Setup the status message
    statusElement.textContent = generateLastEdited(note.updatedAt);
    statusElement.classList.add('list-item__subtitle');
    noteElement.appendChild(statusElement);

    return noteElement
}

//Sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byNew') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byAlpha') {
        return notes.sort((a, b) => {
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
const renderNotes = (notes, inputFilters) => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, inputFilters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(inputFilters.searchText.toLowerCase()))

    notesEl.innerHTML = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note);
            notesEl.appendChild(noteElement);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'You have no notes!';
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage);
    }
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;