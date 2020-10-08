/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    console.log(source[keys[i]]);
    if (keys[i] === source[keys[i]]) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
