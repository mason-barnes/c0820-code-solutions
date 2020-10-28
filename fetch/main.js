/* eslint-disable no-console */
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
