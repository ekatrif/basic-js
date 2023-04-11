const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = n.toString();
  let max=0;

  for (let i=0;i<nStr.length;i++) {
    let slicedStr = nStr.slice(0, i) + nStr.slice(i + 1);
    if (+slicedStr > max) {
      max=+slicedStr;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
