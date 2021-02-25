/**
 * Returns an object with random number
 * @return {Promise<{ data: number }>}
 */
const fetchData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: Math.random() }), 300;
    })
  );
};

/**
 * Returns Promise which is resolved with an array of random numbers
 * @param {number} numbersCount
 * @return {Promise<number[]>} For example Promise can be resolved into: [0.240107400706979]
 */
const getArrayOfRandomNumbers = async (numbersCount = 3) => {
  const result = [];

  // fill result with random numbers using fetchDate

  return result;
};

const printResult = async () => {
  // get print output, e.g. [0.240107400706979]
  console.log("1: ", getArrayOfRandomNumbers());
  console.log("2: ", getArrayOfRandomNumbers(5));
};

printResult();
