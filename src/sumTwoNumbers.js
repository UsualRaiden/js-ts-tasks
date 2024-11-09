/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let digNum1 = firstNumber;
  let digNum2 = secondNumber;
  if (typeof firstNumber === 'string') {
    digNum1 = firstNumber.replace(/\s+/g, '');
  }
  if (typeof secondNumber === 'string') {
    digNum2 = secondNumber.replace(/\s+/g, '');
  }
  let num1 = parseFloat(digNum1);
  let num2 = parseFloat(digNum2);
  let result = num1 + num2;
  return result;
};
