const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = Object.values(data.notes);
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: 'ID must be a positive integer' });
    return;
  }
  const notesArray = Object.values(data.notes);
  const note = notesArray.find(note => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: `Nothing found with id: ${id}` });
  }
});
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedNote = req.body;
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!updatedNote.content) {
    return res.status(400).json({ error: 'content required!' });
  } else if (data.notes[id] === undefined) {
    return res.status(404).json({ error: `Cannot locate the note with id: ${id}` });
  } else {
    updatedNote.id = id;
    data.notes[id] = updatedNote;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'Something went wrong!' });
      } else {
        res.status(200).json(updatedNote);
      }
    });
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = data.nextId;
  if (!newNote.content) {
    res.status(400).json({ error: 'Content required!' });
  } else {
    data.nextId++;
    newNote.id = id;
    data.notes[id] = newNote;
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    res.status(201).json(data.notes[id]);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: 'ID must be a positive integer' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({ error: `Nothing found with id: ${id}` });
    return;
  }
  delete data.notes[id];
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
  res.status(200).json({ message: `Note with id ${id} deleted successfully.` });
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
