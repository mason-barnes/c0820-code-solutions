/* eslint-disable no-unused-vars */
function getValues(object) {
  const propValues = [];
  for (const key in object) {
    propValues.push(object[key]);
  }
  return propValues;
}
