/* eslint-disable no-unused-vars */
function difference(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return result;
}
