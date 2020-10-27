/* eslint-disable no-console */
const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(text);
});
