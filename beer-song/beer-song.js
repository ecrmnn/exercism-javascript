'use strict';

function makeVerse(verse) {
  const bottle = verse === 1 ? 'bottle' : 'bottles';
  const remaining = (verse - 1) === 0 ? 'no more' : (verse - 1);
  const remainingBottle = (verse - 1) === 1 ? 'bottle' : 'bottles';
  const take = verse === 1 ? 'it' : 'one';
  return `${verse} ${bottle} of beer on the wall, ${verse} ${bottle} of beer.\nTake ${take} down and pass it around, ${remaining} ${remainingBottle} of beer on the wall.\n`
}

function lastVerse() {
  return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
}

module.exports = class BeerSong {
  verse(verse) {
    if (!verse) {
      return lastVerse();
    }

    return makeVerse(verse);
  }

  sing(start, end) {
    if (typeof end === 'undefined') {
      end = 0;
    }

    const verses = [];

    for (let i = start; end <= i; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}