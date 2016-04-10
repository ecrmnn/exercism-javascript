//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function () {
};

Bob.prototype.hey = function (input) {
  const firstCharacterIsNumber = !isNaN(input[0]);
  const isAllUpperCase = input === input.toUpperCase();
  const endsWithQuestionMark = input[input.length - 1] === '?';
  const endsWithExclamationMark = input[input.length - 1] === '!';

  const isSilence = !input.replace(/ /g, '').length;
  const isQuestion = (!isAllUpperCase || firstCharacterIsNumber) && endsWithQuestionMark;
  const isShouting = (
    (isAllUpperCase && (endsWithQuestionMark || endsWithExclamationMark)) ||
    (isAllUpperCase && !firstCharacterIsNumber)
  );

  if (isSilence) {
    return 'Fine. Be that way!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (isShouting) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
};

module.exports = Bob;
