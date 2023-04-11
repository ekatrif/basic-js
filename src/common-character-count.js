const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  let commonChars = 0;

  arr1.forEach(item => {
    obj1[item] = s1.split(item).length - 1;
  })

  arr2.forEach(item => {
    obj2[item] = s2.split(item).length - 1;
  })


  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (let i=0;i<keys1.length;i++) {
    for (let j=0;j<keys2.length;j++) {
      if (keys1[i] === keys2[j]) {
        commonChars += Math.min(obj1[keys1[i]],obj2[keys2[j]])
      }
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
