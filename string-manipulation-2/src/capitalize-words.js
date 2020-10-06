/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[i].toUpperCase();
    } else if (string[i] === ' ') {
      newString += ' ';
      i++;
      newString += string[i].toUpperCase();
    } else if (string[i] === ',') {
      newString += ',';
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
