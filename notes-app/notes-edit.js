const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(function(note) {
    return note.id === noteId;
})
if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value;
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value;
    saveNotes(notes);
})

removeElement.addEventListener('click', function(e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})

//global event listener
//storage event fires when data in local storage changes
window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
//this is a duplicate
        note = notes.find(function(note) {
            return note.id === noteId;
        })
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
    }
})