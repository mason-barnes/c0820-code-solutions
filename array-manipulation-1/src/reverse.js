/* eslint-disable no-unused-vars */
function reverse(array) {
  const newArray = [];
  for (let i = array.length; i > 0; i--) {
    newArray.push(array[i - 1]);
  }
  return newArray;
}
