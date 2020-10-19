/* eslint-disable no-unused-vars */
function flatten(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const section = array[i];
      for (let j = 0; j < section.length; j++) {
        result.push(section[j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
