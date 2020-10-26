/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  for (const prop in source) {
    console.log(prop, keys);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== undefined) {
        result[prop] = source[prop];
      }
    }
  }
  return result;
}
