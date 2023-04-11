const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dict = {};
  
  for (let i=0;i<domains.length;i++) {
    
    const currentDomain = domains[i];

    const subDomains = currentDomain.split(".").reverse();

    let prevPeace = ""
    for (let j=0; j< subDomains.length; j++) {

      const dot="."
      const peace = prevPeace + dot + subDomains[j];
      prevPeace = peace;
      
      dict[peace]  ? dict[peace] +=1 : dict[peace] = 1
    }
  }
  
  return dict;
}

module.exports = {
  getDNSStats
};
