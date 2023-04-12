const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // isMAC48Address('00-1B-63-84-45-E6') => true
  let number=0;
  const arr = n.split("-");
  const sectionsCount = arr.length;

  arr.forEach(item => {
    const hasHexDigits = /^[0-9a-fA-F]+$/g.test(item);
    if (hasHexDigits) {
      number++;
    }
  })

  return sectionsCount === 6 && number === 6;

}
module.exports = {
  isMAC48Address
};
