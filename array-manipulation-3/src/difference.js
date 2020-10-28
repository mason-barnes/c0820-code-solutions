/* eslint-disable no-unused-vars */
function difference(first, second) {
  const result = [];
  let longestArray = first;
  if (longestArray.length < second.length) {
    longestArray = second;
  }
  for (let i = 0; i < longestArray.length; i++) {
    if (!first.includes(second[i])) {
      result.push(first[i]);
    }
  }
  return result;
}
