const express = require('express');
const app = express();

app.use((req, res, next) => {
  switch (req.originalUrl) {
    case '/index.html':
    case '/main.js':
    case '/styles.css':
      res.sendFile(req.originalUrl, { root: __dirname });
      break;
    default:
      next();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
