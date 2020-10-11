/* eslint-disable no-console */
const data = require('./data.json');
const fs = require('fs');
const arg2 = process.argv[2];
const arg3 = process.argv[3];
const arg4 = process.argv[4];

if (arg2 === 'read') {
  for (const note in data.notes) {
    console.log(note + ':', data.notes[note]);
  }
}

if (arg2 === 'create') {
  if (data.notes !== data.nextId) {
    data.notes[data.nextId] = arg3;
    data.nextId++;
  }
}

if (arg2 === 'delete') {
  delete data.notes[arg3];
}

if (arg2 === 'update') {
  data.notes[arg3] = arg4;
}

const newData = JSON.stringify(data, null, 2);

fs.writeFile('data.json', newData, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
