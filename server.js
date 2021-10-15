const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index');

const PORT = process.env.port || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);

// GET wildcard for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
);

// listen to host port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 👂`)
);