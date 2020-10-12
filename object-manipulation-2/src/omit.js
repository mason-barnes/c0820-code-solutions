/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== result[i]) {
      result[source[i]];
    }
  }
  return result;
}
