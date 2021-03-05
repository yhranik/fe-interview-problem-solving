const hero1 = 'Iron man'
const hero2 = 'Iron man'

const hero3 = {
  name: 'Iron man',
}

const hero4 = {
  name: 'Iron man',
}

const hero5 = {
  city: {
    name: 'New York',
  },
  name: 'Iron man',
}

const hero6 = {
  name: 'Iron man',
  city: {
    name: 'Los Angeles',
  },
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
  if (a === b) {
    return true
  } else if (isObject(a) && isObject(b)) {
    return shallowEqual(a, b)
  }

  return false
}

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }

  return true
}

function isObject(object) {
  return object != null && typeof object === 'object'
}

console.log('1: ' + isEqual(hero1, hero2))
console.log('2: ' + isEqual(hero3, hero4))
console.log('3: ' + isEqual(hero5, hero6))
