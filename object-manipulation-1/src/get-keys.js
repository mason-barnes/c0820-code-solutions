/* eslint-disable no-unused-vars */
function getKeys(object) {
  const properties = [];
  for (const key in object) {
    properties.push(key);
  }
  return properties;
}
