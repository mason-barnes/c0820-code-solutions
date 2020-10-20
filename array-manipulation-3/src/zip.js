/* eslint-disable no-unused-vars */
function zip(first, second) {
  const result = [];
  let length = first.length;
  if (length > second.length) {
    length = second.length;
  }
  for (let i = 0; i < length; i++) {
    const array = [];
    array.push(first[i], second[i]);
    result.push(array);
  }
  return result;
}
