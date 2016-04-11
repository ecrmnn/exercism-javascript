'use strict';

module.exports = class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches() {
    let matches = Array.from(arguments);
    if (typeof arguments[0] !== 'string') {
      matches = arguments[0];
    }

    const anagrams = [];

    matches.forEach(match => {
      const wordLowerCaseSplit = this.word.toLowerCase().split('');

      match.split('').forEach(character => {
        const indexOfCharacter = wordLowerCaseSplit.indexOf(character.toLowerCase());

        if (indexOfCharacter !== -1) {
          wordLowerCaseSplit.splice(indexOfCharacter, 1)
        }
      });

      if (
        !wordLowerCaseSplit.length &&
        this.word.length === match.length &&
        this.word.toLowerCase() !== match.toLowerCase()
      ) {
        anagrams.push(match);
      }
    });

    return anagrams;
  }
}