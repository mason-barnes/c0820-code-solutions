/* eslint-disable no-unused-vars */
function take(array, count) {
  const newArray = [];
  if (count > array.length) {
    return newArray;
  }
  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
