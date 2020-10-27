/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (!keys.includes(prop)) {
        result[prop] = source[prop];
      }
    }
  }
  return result;
}
