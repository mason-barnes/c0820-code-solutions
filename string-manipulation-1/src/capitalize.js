/* eslint-disable no-unused-vars */
function capitalize(word) {
  let upperCase = '';
  let lowerCase = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      upperCase += word[i].toUpperCase();
    } else {
      lowerCase += word[i].toLowerCase();
    }
  }
  return upperCase + lowerCase;
}
