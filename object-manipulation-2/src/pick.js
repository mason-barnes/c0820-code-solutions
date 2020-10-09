/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const object = Object.keys(source);
  const result = {};
  console.log(object);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === object[i]) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
