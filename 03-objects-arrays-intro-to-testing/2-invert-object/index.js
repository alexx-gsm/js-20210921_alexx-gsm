/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj === 'object') {
    return Object.entries(obj).reduce((result, [key, value]) => {
      return Object.assign(result, {[value]: key});
    }, {});
  }
}
