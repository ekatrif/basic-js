const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '(  )') {
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position < this.chain.length + 1 && position >=1) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    if (this.chain.length>1) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
