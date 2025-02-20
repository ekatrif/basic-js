const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length===0) {
    return "Unable to determine the time of year!"
  }

  if (date instanceof Date === false || Object.getOwnPropertyNames(date).length) {
    throw new Error("Invalid date!");
  }

  




  const month = date.getMonth();
  //from 0 to 11
  //jan - 0
  //feb - 
  // etc
  let output = "";
  
  if (month === 0 || month === 1 || month === 11) {
    output="winter";
  }
  if (month === 2 || month === 3 || month === 4) {
    output="spring";
  }
  if (month === 5 || month === 6 || month === 7) {
    output="summer";
  }
  if (month === 8 || month === 9 || month === 10) {
    output="fall";
  }

  return output;

}

module.exports = {
  getSeason
};
