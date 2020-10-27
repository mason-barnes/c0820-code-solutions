const fs = require('fs');

const content = process.argv[2];

fs.writeFile('note.txt', content, (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
