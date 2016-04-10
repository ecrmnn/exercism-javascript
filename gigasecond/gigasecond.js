'use strict';

module.exports = class Gigasecond {
  constructor(_date) {
    this._date = _date;
  }

  date() {
    const localDateCopy = new Date(this._date.getTime());

    if (localDateCopy < new Date(1970, 1, 1)) {
      localDateCopy.setHours(localDateCopy.getHours() - 1);
    }

    localDateCopy.setSeconds(localDateCopy.getSeconds() + 1000000000);
    return localDateCopy;
  }
};