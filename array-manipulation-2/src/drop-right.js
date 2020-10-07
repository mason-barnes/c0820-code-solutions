/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  const newArray = [];
  const newCount = array.length - count;
  if (newCount <= 0) {
    return [];
  }
  for (let i = 0; i < newCount; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
