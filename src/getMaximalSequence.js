/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];

  let maxCount = 1;
  let currentCount = 1;
  let maxSequenceStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxSequenceStartIndex = i - currentCount;
      }
      currentCount = 1;
    }
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxSequenceStartIndex = arr.length - currentCount;
  }

  return arr.slice(maxSequenceStartIndex, maxSequenceStartIndex + maxCount);
};
