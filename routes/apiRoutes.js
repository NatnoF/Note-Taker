// Require db.json and store.js
const db = require("../db/db.json");
const store = require("../db/store");

// Initialzing ID which is required for the notes to be able to be deleted and viewed
// Deleted initialized to 0 to keep track of how many notes were deleted and to add that amount ... 
// ... to ID, that way no matter what note is deleted the ID of a new note will always be unique.
var id = 0;
var deleted = 0;

module.exports = function(app)
{
    // GET route
    app.get("/api/notes", function(req,res)
    {
        store.getNotes(res)
            .then(data => JSON.parse(data))
            .then(notes => {res.json(notes); id = notes.length + 1 + deleted;})
            .catch(err => res.status(500).json(err));
    });

     // POST route
     app.post("/api/notes", function(req,res)
     {
        store.getNotes()
            .then(data => JSON.parse(data))
            .then(notes => id = notes.length + 1 + deleted)
            .then(req.body.id = id)
            .then(store.saveNote(req.body))
                .then(note=>res.json(note))
            .catch(err => res.status(500).json(err));
     });
 
    // DELETE route
    app.delete("/api/notes/:id", function(req,res)
    {
        store.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
        
        deleted++;
    });
}