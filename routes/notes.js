const notes = require('express').Router();
const {read, readAppend, writeToFile } = require('../helpers/helpers')
const { v4: uuidv4 } = require('uuid');

// GET route for notes
notes.get('/', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET route for specific notes
notes.get('/:id', (req, res) => {
    const notID = req.params.id;
    read('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const fin = json.filter((note) => note.id === notID)
        return fin.length > 0 ? res.json(fin) : res.json ("No such note!");
    });
});

// delete note
notes.delete('/:id', (req, res) => {
    const notID = req.params.id;
    read('./db/db.json')
        .then((data)) => JSON.parse(data))
        .then((json) => {
            const fin = json.filter((note) => note.id !== notID);

            writeToFile('./db/db.json', fin);

            res.json(`${notID} deleted.`);
        });
});