/* eslint-disable no-unused-vars */
function union(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return result;
}
