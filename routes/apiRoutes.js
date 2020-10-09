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
            .then(notes => res.json(notes))
    });

    // POST route
    app.post("/api/notes", function(req,res)
    {
        // Nothing for now.
    });

    // DELETE route
    app.delete("/api/notes/:id", function(req,res)
    {
        // Nothing for now
    });

}