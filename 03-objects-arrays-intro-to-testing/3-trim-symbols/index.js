/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  }

  if (!size) {
    return string;
  }

  let originChar;
  let counter;

  return string.split('').reduce((result, char) => {
    if (originChar !== char) {
      originChar = char;
      counter = size - 1;

      return result + char;
    }

    if (counter) {
      --counter;
      return result + char;
    }

    return result;
  }, '');
}
