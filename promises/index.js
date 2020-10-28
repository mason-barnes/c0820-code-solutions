/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Dave');

promise.then(message => {
  console.log(message);
});

promise.catch(error => {
  console.log(error.message);
});
