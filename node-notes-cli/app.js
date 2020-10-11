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
  switch (arg3) {
    case '1':
      delete data.notes[1];
      break;
    case '2':
      delete data.notes[2];
      break;
    case '3':
      delete data.notes[3];
      break;
    case '4':
      delete data.notes[4];
      break;
    case '5':
      delete data.notes[5];
      break;
    default:
      break;
  }
}

if (arg2 === 'update') {
  switch (arg3) {
    case '1':
      data.notes[1] = arg4;
      break;
    case '2':
      data.notes[2] = arg4;
      break;
    case '3':
      data.notes[3] = arg4;
      break;
    case '4':
      data.notes[4] = arg4;
      break;
    case '5':
      data.notes[5] = arg4;
      break;
    default:
      break;
  }
}

const newData = JSON.stringify(data, null, 2);

fs.writeFile('data.json', newData, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
