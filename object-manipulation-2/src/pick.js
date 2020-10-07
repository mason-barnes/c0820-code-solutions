/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === source[keys]) {
      result[keys[i]] = source[keys];
    }
  }
  return result;
}
