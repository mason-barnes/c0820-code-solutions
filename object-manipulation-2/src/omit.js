/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    console.log(keys.length);
    if (source[keys[i]] !== keys[i]) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
