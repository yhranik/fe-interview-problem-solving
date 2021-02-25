const hero1 = 'Iron man'
const hero2 = 'Iron man'

const hero3 = {
  name: 'Iron man',
}

const hero4 = {
  name: 'Iron man',
}

/**
 * Returns result of comparing two given arguments
 * @param {any} a
 * @param {any} b
 * @return {boolean} true - if a and b are equal
 *                   false - if not
 */
function isEqual(a, b) {
  // your code here
  return a === b
}

console.log('1: ' + isEqual(hero1, hero2))
console.log('2: ' + isEqual(hero3, hero4))
