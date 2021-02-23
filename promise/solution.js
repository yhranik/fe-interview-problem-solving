const fetchData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: Math.random() }), 300;
    })
  );
};

const getRandomSet = async (itemInSet = 3) => {
  const result = [];
  const items = [...Array(itemInSet).keys()];

  for (let i = 0; i < items.length; i++) {
    const response = await fetchData();

    result.push(response.data);
  }

  return result; // [0.34324234]
};

const printResult = async () => {
  // get set and print output [23213123]
  console.log("printResult prints: ", await getRandomSet());
  // printResult prints: [0.045453453, 0.02252352, 0.46575675675]
  console.log("printResult prints: ", await getRandomSet(5));
  // printResult prints: [0.045453453, 0.02252352, 0.46575675675, 0.235325235, 0.3436456, 0.65457547457]
};

printResult();
