const fs = require('fs');
const number = Math.random() * 10;

fs.writeFile('random.txt', number, (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
