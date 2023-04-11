const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) {return ""};
  const arr = [];
  let section="";

  for (let i=1;i<str.length;i++) {
    if (str[i] !== str[i-1]) {
      section += str.slice(i-1,i);
      arr.push(section);
      section="";
    } else {
      section += str.slice(i-1,i);
    }
  }

  if (str[str.length-1]===str[str.length-2]) {
    section += str[str.length-1];
    arr.push(section);
  } else {
    arr.push(str[str.length-1]);
  }
  
  const resultArr = arr.map(str=> {
    return [str.length,str[0]]
  })
  
  const result=[];
  
  resultArr.forEach(item => {
    const number = item[0] === 1 ? "" : item[0];
    result.push(number,item[1])
  })

  return result.join("");
}

module.exports = {
  encodeLine
};
