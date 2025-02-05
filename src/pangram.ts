/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const isString = typeof word === 'string';
  const processedWord = isString ? word.toLowerCase().replace(/[^a-z]/g, '') : word.toString().replace(/\D/g, '');

  if (isString) {
    const letterSet = new Set(processedWord);
    for (let charCode = 97; charCode <= 122; charCode++) {
      if (!letterSet.has(String.fromCharCode(charCode))) {
        return false;
      }
    }
  } else {
    const digitSet = new Set(processedWord);
    for (let digit = 0; digit <= 9; digit++) {
      if (!digitSet.has(digit.toString())) {
        return false;
      }
    }
  }
  return true;
};
