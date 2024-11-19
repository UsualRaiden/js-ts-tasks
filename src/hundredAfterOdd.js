/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const oddHundred = [];

  for (let i = 0; i < arr.length; i++) {
    oddHundred.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      oddHundred.push(100);
    }
  }
  return oddHundred;
};
