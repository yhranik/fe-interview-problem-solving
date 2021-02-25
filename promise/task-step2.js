/**
 * Returns an object with random number
 * @return {Promise<{ data: number }>}
 */
const fetchData = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({ data: Math.random() }), 300
    })
  )
}

/**
 * Returns Promise which is resolved with an array of random numbers
 * @param {number} arraySize
 * @return {Promise<number[]>} For example Promise can be resolved into: [0.240107400706979]
 */
const getArrayOfRandomNumbers = async (arraySize = 3) => {
  const result = []

  // fill result with random numbers using fetchDate
  const number = (await fetchData()).data
  result.push(number)

  return result
}

/**
 * Prints into console array of some random numbers
 */
const printResult = async () => {
  // should print [0.240107400706979]
  console.log('1: ', await getArrayOfRandomNumbers())

  // should print [0.240107400706979, 0.240107400706979, 0.240107400706979, 0.240107400706979, 0.240107400706979]
  console.log('2: ', await getArrayOfRandomNumbers(5))
}

printResult()
