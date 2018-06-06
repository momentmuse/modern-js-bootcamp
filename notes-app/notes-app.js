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

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
});

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, inputFilters);
    }
})

//Unix Epoch - January 1 1970 00:00:00
//negative before, positive after, in miliseconds

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Date: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)

const date1 = new Date('January 12 2012 16:43:12')
const date2 = new Date('March 23 1995 12:34:01')
date1.getTime() < date2.getTime() ?
    console.log(date1.toString())
    : console.log(date2.toString())