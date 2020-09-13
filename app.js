// Express-Bibliothek importieren
var express = require('express');

// Server erstellen
var app = express()

// Array mit allen Tieren
var animals = []

// Parsen des Body in POST aktivieren
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// URL für Startseite festlegen
app.get('/', (req, res) => {
    res.send('<form method="POST" action="/animals"><input type="text" name="type"><input type="submit" value="Senden"></form>')
})

app.get('/animals', (req, res) => {
    res.json([{type: 'Dog', name: 'Wuffi'}, {type: 'Cat', name: 'Whiskers'}])

})

app.post('/animals', (req, res) => {
    var data = req.body
    animals.push(data)
    res.json(animals)
})

module.exports = app;
