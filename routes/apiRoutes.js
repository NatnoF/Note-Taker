// Require db.json and store.js
const db = require("../db/db.json");
const store = require("../db/store");

var id = 0;

module.exports = function(app)
{
    // GET route
    app.get("/api/notes", function(req,res)
    {
        store.getNotes(res)
            .then(data => JSON.parse(data))
            .then(notes => {res.json(notes); id = notes.length + 1;})
    });

     // POST route
     app.post("/api/notes", function(req,res)
     {
        store.getNotes()
            .then(data => JSON.parse(data))
            .then(notes => id = notes.length)
            .then(req.body.id = id)
            .then(store.saveNote(req.body))
                .then(note=>res.json(note));
     });
 
    // DELETE route
    app.delete("/api/notes/:id", function(req,res)
    {
        // Nothing for now
    });

}