/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  const newArray = [];
  const newCount = array.length - count;
  if (newCount <= 0) {
    return [];
  }
  for (let i = newCount; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
