const fs = require('fs');
const data = require('./data.json');

const readNotes = () => {
  console.log(data.notes);
};

const addNote = note => {
  const id = ++data.nextId;
  data.notes[id] = note;
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
  console.log(`Note with id ${id} added successfully`);
};

const deleteNote = id => {
  if (!data.notes[id]) {
    console.log(`Note with id ${id} not found`);
    return;
  }
  delete data.notes[id];
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
  console.log(`Note with id ${id} deleted successfully`);
};

const updateNote = (id, note) => {
  if (!data.notes[id]) {
    console.log(`Note with id ${id} not found`);
    return;
  }
  data.notes[id] = note;
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
  console.log(`Note with id ${id} updated successfully`);
};

const command = process.argv[2];

if (command === 'read') {
  readNotes();
} else if (command === 'add') {
  addNote(process.argv[3]);
} else if (command === 'delete') {
  deleteNote(process.argv[3]);
} else if (command === 'update') {
  updateNote(process.argv[3], process.argv[4]);
} else {
  console.log('Invalid command');
}
