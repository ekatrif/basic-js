const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result="";
  let additionStr = "";
  const resultArr = [];
  const additionToStr = "" + options.addition;
  if (options.repeatTimes) {
    for (let j=0;j<options.repeatTimes;j++) {
      let currentStr = "";
      currentStr += str;
  if (additionToStr !=="undefined" && options.additionRepeatTimes) {
    const additionArr = [];
    for (let i=0;i<options.additionRepeatTimes;i++) {
      additionArr.push(additionToStr);
    }
    additionStr = options.additionSeparator ? additionArr.join(options.additionSeparator) : additionArr.join("|");
  } else if (additionToStr !=="undefined") {
    additionStr = additionToStr;
  }
  currentStr += additionStr;
  resultArr.push(currentStr);
    }
  result = options.separator ? resultArr.join(options.separator) : resultArr.join("+");
  } else {
      let currentStr = "";
      currentStr += str;
  if (additionToStr !=="undefined" && options.additionRepeatTimes) {
    const additionArr = [];
    for (let i=0;i<options.additionRepeatTimes;i++) {
      additionArr.push(additionToStr);
    }
    additionStr = options.additionSeparator ? additionArr.join(options.additionSeparator) : additionArr.join("|");
  } else if (additionToStr !=="undefined") {
    additionStr = additionToStr;
  }
  currentStr += additionStr;
  resultArr.push(currentStr);

  result = options.separator ? resultArr.join(options.separator) : resultArr.join("+");

  }
  
  return result;
}

module.exports = {
  repeater
};
