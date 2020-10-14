const express = require('express');
const app = express();
const students = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 27,
    name: 'Mason Barnes',
    course: 'LFZ Full Immersion',
    grade: 100
  }
];

app.get('/api/grades', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
