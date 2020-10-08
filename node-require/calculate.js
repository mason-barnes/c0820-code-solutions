/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
switch (process.argv[3]) {
  case 'minus':
  case '-':
    console.log('result:', subtract(process.argv[2], process.argv[4]));
    break;
  case 'plus':
  case '+':
    console.log('result:', add(process.argv[2], process.argv[4]));
    break;
  case 'times':
  case '*':
  case 'x':
    console.log('result:', multiply(process.argv[2], process.argv[4]));
    break;
  case 'over':
  case '/':
    console.log('result:', divide(process.argv[2], process.argv[4]));
    break;
  default:
    console.log("Can't compute");
}
