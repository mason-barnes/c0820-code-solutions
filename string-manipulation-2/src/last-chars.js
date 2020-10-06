/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  let newString = '';
  let newLength = length;
  if (newLength > string.length) {
    newLength = string.length;
  }
  for (let i = newLength; i > 0; i--) {
    newString += string[string.length - i];
  }
  return newString;
}
