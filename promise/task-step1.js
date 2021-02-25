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
 * @return {Promise<number[]>} For example Promise can be resolved into: [0.240107400706979]
 */
const getArrayOfRandomNumbers = async () => {
  const result = []

  // fill result with random numbers using fetchDate

  return result
}

/**
 * Prints into console array of some random numbers
 */
const printResult = async () => {
  // should print like [0.240107400706979]
  console.log('1: ', getArrayOfRandomNumbers())
}

printResult()
