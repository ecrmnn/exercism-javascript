'use strict';

module.exports = class Words {
  count(words) {
    const wordArray = words.replace(/\n|\s\s|\t/g, ' ').trim().toLowerCase().split(' ');

    const wordCollection = {};

    wordArray.forEach(word => {
      if (wordCollection.hasOwnProperty(word)) {
        return wordCollection[word]++;
      }
      return wordCollection[word] = 1;
    });

    return wordCollection;
  }
};
