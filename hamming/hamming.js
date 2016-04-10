'use strict';

module.exports = function () {
  this.compute = (a, b) => {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let value = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        value++;
      }
    }

    return value;
  }
}