const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  const dataNotes = [];
  for (const object in data.notes) {
    dataNotes.push(data.notes[object]);
  }
  res.send(dataNotes);
});

app.get('/api/notes/:id', (req, res, next) => {
  if (req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).send({ error: 'cannot find note with id ' + req.params.id });
  } else {
    res.send(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res, next) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = req.body;
    newNote.id = data.nextId;
    data.notes[data.nextId] = newNote;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.status(201).send(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  if (req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    delete data.notes[req.params.id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  if (req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = req.params.id;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
