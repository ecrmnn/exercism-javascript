'use strict';

module.exports = class PhoneNumber {
  constructor(phonenumber) {
    this.phonenumber = phonenumber.replace(/-|\(|\)|\s|\./g, '');
  }

  number() {
    let phone = this.phonenumber

    if (phone[0] == 1 && phone.length >= 10) {
      if (phone.length === 11) {
        phone = phone.substring(1);
      }
    } else {
      phone = '0000000000';
    }

    return phone;
  }

  areaCode() {
    return this.phonenumber.substring(0, 3);
  }

  toString() {
    return `(${this.phonenumber.substring(0, 3)}) ${this.phonenumber.substring(3,6)}-${this.phonenumber.substring(6)}`;
  }
}