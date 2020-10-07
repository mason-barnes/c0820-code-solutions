/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  const firstIn = string.charAt(firstIndex);
  const secondIn = string.charAt(secondIndex);
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondIn;
    } else if (i === secondIndex) {
      newString += firstIn;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
