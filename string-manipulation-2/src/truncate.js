/* eslint-disable no-unused-vars */
function truncate(length, string) {
  let shortened = '';
  if (string === '') {
    return '...';
  }
  if (length > string.length) {
    return string + '...';
  }
  for (let i = 0; i < length; i++) {
    shortened += string[i];
  }
  return shortened + '...';
}
