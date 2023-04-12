const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const onlySortedHeights = arr.filter(height => height !== -1).sort((a, b) => a - b);

    //Если элемент массива -1, оставляем, если высота - вырезаем высоту из отсортированного массива и вставляем в result

    const result = arr.map(item => (item !== -1 ? onlySortedHeights.shift() : item));  

    return result;
}

module.exports = {
  sortByHeight
};
