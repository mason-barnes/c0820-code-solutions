/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  let newString = '';
  let newLength = length;
  if (string === '') {
    return newString;
  }
  if (newLength > string.length) {
    newLength = string.length;
  }
  for (let i = 0; i < newLength; i++) {
    newString += string[i];
  }
  return newString;
}
