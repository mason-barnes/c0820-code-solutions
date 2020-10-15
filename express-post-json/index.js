const express = require('express');
const app = express();

const grades = [];
let nextId = 1;
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;
  newGrade.id = nextId++;
  grades.push(newGrade);
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
