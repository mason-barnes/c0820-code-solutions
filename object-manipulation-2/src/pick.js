/* eslint-disable no-unused-vars */
function pick(source, keys) {
  // console.log(keys.length);
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === source[i]) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
