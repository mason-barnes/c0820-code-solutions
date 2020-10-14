/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const result = {};
  console.log('source', source);
  console.log('keys', keys);
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== keys[i]) {
      result[source[i]] = source[i];
    }
  }
  console.log(result);
  return result;
}
