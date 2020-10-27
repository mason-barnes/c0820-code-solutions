/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      result[prop] = source[prop];
    }
  }
  return result;
}
