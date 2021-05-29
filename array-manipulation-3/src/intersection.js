/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  return result;
}
