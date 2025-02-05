/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let result = value;
  switch (from) {
    case 'C':
      result = value + 273.15;
      break;
    case 'K':
      result = value - 273.15;
      break;
    case 'm':
      result = value;
      break;
    case 'mi':
      result = value * 1609.344038538739;
      break;
    case 'gr':
      result = value;
      break;
    case 'pound':
      result = value * 453.5920792079208;
      break;
    default:
      break;
  }
  switch (to) {
    case 'C':
      if (from === 'K') {
        result = value - 273.15;
      }
      break;
    case 'K':
      if (from === 'C') {
        result = value + 273.15;
      } else if (from === 'K') {
        result = value;
      }
      break;
    case 'm':
      break;
    case 'mi':
      if (from === 'm' || from === 'mi') {
        result = result / 1609.44038538739;
      }
      break;
    case 'gr':
      break;
    case 'pound':
      if (from === 'gr' || from === 'pound') {
        result = result / 453.5920792079208;
      }
      break;
    default:
      break;
  }

  return parseFloat(result.toFixed(2));
};
