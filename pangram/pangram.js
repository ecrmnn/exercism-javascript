'use strict';

module.exports = class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    const characters = this.sentence.toLowerCase().replace(/ /g,'').split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const intersection = characters.filter(character => {
      return alphabet.indexOf(character) !== -1;
    });

    return new Set(intersection).size === alphabet.length;
  }
};