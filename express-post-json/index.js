const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId++;
  grades[grade.id] = grade;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
