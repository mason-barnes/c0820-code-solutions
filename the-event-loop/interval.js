/* eslint-disable no-console */
let count = 3;
function consoleLog() {
  console.log(count);
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
  count--;
}
const interval = setInterval(consoleLog, 1000);
