/* eslint-disable no-unused-vars */
function zip(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    const array = [];
    if (first[i] && second[i]) {
      array.push(first[i], second[i]);
      result.push(array);
    }
  }
  return result;
}
