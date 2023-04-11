const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
      this.isDirect = isDirect;
    }
  
    encrypt(message, key) {
      if (!message || !key) {
        throw new Error('Incorrect arguments!');
      }
  
      message = message.toUpperCase();
      key = key.toUpperCase();

      // числовое значение 'A' в ASCII  
      const codeA = 65;
      //число букв в алфавите
      const lettersNumber = 26;
  
      let result = '';
      let keyIndex = 0;
  
      for (let i = 0; i < message.length; i++) {
        const currentChar = message.charCodeAt(i);
  
        if (currentChar >= codeA && currentChar < codeA + lettersNumber) {
          const messageIndex = currentChar - codeA;
          const keyChar = key.charCodeAt(keyIndex % key.length);
          const keyIndexInAlphabet = keyChar - codeA;
          let codedIndex = (messageIndex + keyIndexInAlphabet) % lettersNumber;
          let codedChar = String.fromCharCode(codedIndex + codeA);
  
          result += codedChar;
          keyIndex++;
        } else {
          result += message[i];
        }
      }
  
      return this.isDirect ? result : result.split('').reverse().join('');
    }
  
    decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) {
        throw new Error('Incorrect arguments!');
      }
  
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
  
      const codeA = 65;
      const lettersNumber = 26;
  
      let result = '';
      let keyIndex = 0;
  
      for (let i = 0; i < encryptedMessage.length; i++) {
        const currentChar = encryptedMessage.charCodeAt(i);
  
        if (currentChar >= codeA && currentChar < codeA + lettersNumber) {
          const encryptedIndex = currentChar - codeA;
          const keyChar = key.charCodeAt(keyIndex % key.length);
          const keyIndexInAlphabet = keyChar - codeA;
          let decodedIndex =
            (encryptedIndex + lettersNumber - keyIndexInAlphabet) %
            lettersNumber;
          let decodedChar = String.fromCharCode(decodedIndex + codeA);
  
          result += decodedChar;
          keyIndex++;
        } else {
          result += encryptedMessage[i];
        }
      }
  
      return this.isDirect ? result : result.split('').reverse().join('');
    }
  }


module.exports = {
  VigenereCipheringMachine
};
