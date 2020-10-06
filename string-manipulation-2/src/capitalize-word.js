/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const upperCase = word.charAt(0).toUpperCase();
  const lowerCase = word.slice(1).toLowerCase();
  let completedWord = upperCase + lowerCase;
  if (completedWord === 'Javascript') {
    completedWord = 'JavaScript';
  }
  return completedWord;
}
