/* eslint-disable no-unused-vars */
function unique(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (array[i] !== result[j]) {
        result.push(array[i]);
      }
    }
  }
  return result;
}
