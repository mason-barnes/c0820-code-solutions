/* eslint-disable no-unused-vars */
function unique(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const index = array[i];
    for (let j = 0; j < result.length; j++) {
      if (index !== result[j]) {
        result.push(index);
      }
    }
  }
  return result;
}
