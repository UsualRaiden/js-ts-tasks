/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(item => {
    if (item === value) return false;
    if (Array.isArray(item) && Array.isArray(value)) {
      if (item.length !== value.length) return true;
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== value[i]) return true;
      }
      return false;
    }
    if (typeof item === 'object' && typeof value === 'object' && item !== null && value !== null) {
      let keysA = Object.keys(item);
      let keysB = Object.keys(value);
      if (keysA.length !== keysB.length) return true;
      for (let key of keysA) {
        if (!keysB.includes(key) || item[key] !== value[key]) return true;
      }
      return false;
    }
    return true;
  });
};
