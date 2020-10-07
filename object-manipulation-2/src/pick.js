/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source.hasOwnProperty(keys[i])) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
