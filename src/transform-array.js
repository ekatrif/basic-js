const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
    console.log('\'arr\' parameter must be an instance of the Array!')
  } else {
    const output=[...arr];
    const dict = ["--discard-next","--discard-prev","--double-next","--double-prev","discarded"];
    for (let i=0;i<output.length;i++) {
      if (output[i]==="--discard-next" && output[i+1] && typeof output[i+1] === "number") {
        output[i+1] = "discarded";
        i++;
      }
      if (output[i]==="--discard-prev" && output[i-1] && typeof output[i-1] === "number") {
        output[i-1] = "discarded";
      }
      if (output[i]==="--double-next" && output[i+1] && typeof output[i+1] === "number") {
        typeof output[i+1] === "object" ? output[i] = {...output[i+1]} : output[i] = output[i+1];
        i++;
      }
      if (output[i] ==="--double-prev" && output[i-1] && typeof output[i-1] === "number") {
        typeof output[i-1] === "object" ? output[i] = {...output[i-1]} : output[i] = output[i-1];
      }
    }

  const result = output.filter(item => {
    return item !== "--discard-next" && item !== "--discard-prev" && item !== "--double-next" && item !== "--double-prev" && item !== "discarded";
  });
  return result;
  }
}

module.exports = {
  transform
};
