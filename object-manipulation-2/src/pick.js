/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
