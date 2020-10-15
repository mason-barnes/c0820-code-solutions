const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Mason Barnes',
    course: 'LFZ',
    grade: 100
  },
  {
    id: 2,
    name: 'Whitney Barnes',
    course: 'Real Estate',
    grade: 100
  }
];

app.get('/api/grades', (req, res) => {
  res.send(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const gradeIndex = grades.findIndex(grade => grade.id === id);
  if (gradeIndex === -1) {
    res.sendStatus(404);
  } else {
    grades.splice(gradeIndex, 1);
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
