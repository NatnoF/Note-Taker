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
        // Nothing for now.
    }

    saveNote (note)
    {
        // Nothing for now.
    }

    deleteNote(id)
    {
        // Nothing for now.
    }
}
module.exports = new Store();