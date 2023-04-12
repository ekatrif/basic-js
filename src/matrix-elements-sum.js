const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const indexesOfZeroes = [];
  matrix.forEach((item,col) => {
    item.forEach((number,row) => {
      if (number === 0) {
        indexesOfZeroes.push([col, row]);
      }
  })
})

  //need indexes of numbers upper zero

  const numbersToSum = [];

  if (indexesOfZeroes.length) {
    matrix.forEach((item,col) => {
      item.forEach((num,row) => {
        indexesOfZeroes.forEach(pare => {
          if (col < pare[0] && row === pare[1]) {
            numbersToSum.push(num);
          }
        })
    })
    })
  } else {
    matrix.forEach(item => {
      item.forEach(num => {
        numbersToSum.push(num);
      })
    })
  }

  return numbersToSum.reduce((sum,current) => sum+current,0);
}

module.exports = {
  getMatrixElementsSum
};
