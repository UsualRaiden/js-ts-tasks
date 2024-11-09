/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let count = 0;
  let startDig = parseFloat(start);
  let endDig = parseFloat(end);
  if (startDig > endDig) {
    for (let i = startDig; i >= endDig; i--) {
      count += i;
    }
  } else {
    for (let j = startDig; j <= endDig; j++) {
      count += j;
    }
  }
  return count;
};
