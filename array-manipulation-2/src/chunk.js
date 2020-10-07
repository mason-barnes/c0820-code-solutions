/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const result = [];
  for (const value of array) {
    const lastArray = result[result.length - 1];
    if (lastArray === undefined || lastArray.length === size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}
