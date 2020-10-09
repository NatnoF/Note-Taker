const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile)

// Class for your notes
class Store
{
    // Defined functions that read, write, and delete to the db.json
    getNotes()
    {
        return readFileAsync("./db/db.json", "utf8");
    }

    writeNotes(note)
    {
        return writeFileAsync("./db/db.json", JSON.stringify(note));
    }

    saveNote (note)
    {
        return this.getNotes()
            .then(data => JSON.parse(data))
            .then(notes => [...notes, note]) // Adding the new note to the array of note objects in the json
            .then(newNoteArray => this.writeNotes(newNoteArray)); // Writing the created array of note objects above into the db.json
    }

    deleteNote(id)
    {
        // Nothing for now.
    }
}
module.exports = new Store();