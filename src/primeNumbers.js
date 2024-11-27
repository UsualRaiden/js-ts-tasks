/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  const sieve = new Array(highestNumber + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i <= Math.sqrt(highestNumber); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= highestNumber; j += i) {
        sieve[j] = false;
      }
    }
  }
  return function (start, end) {
    const primesInRange = [];
    for (let i = start; i <= end; i++) {
      if (sieve[i]) {
        primesInRange.push(i);
      }
    }

    return primesInRange;
  };
};
