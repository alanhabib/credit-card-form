// Write a function that finds and removes instances of four identical
// consecutive lowercase letters. The function should delete as a few letters
// as possible.

// Assume that the maximum length of the string is 150 000 however please
// ellaborate on changes you would do if the maximum length would be 20 million
// or higher?

// Examples:

// "ffdttttyy" should return "ffdtttyy"
// "iiikigggg" should return "iiikiggg"

const newWord = (str) => {
  return str.replace(/(.)\1{3,}/g, "$1$1$1");
};

// Write a function that takes an array of numbers and returns the maximum
// sum of two numbers whose digits have an odd sum.

// Assume that the array contains between 1 and 150 000 elements and that each
// element is within the range of 1 to 1 500 000.

// Examples:

// [19, 2, 42, 18] should return 61
// [61, 32, 51] should return 93

const sumOfTwoArray = (array) => {
  const myArr = array.reduce(
    (acc, _, index) => [
      ...acc,
      ...new Array(array.length - 1 - index).fill(0).map((_, i2) => {
        let sumOfTwo = array[index] + array[index + 1 + i2];
        return sumOfTwo;
      }),
    ],
    []
  );
  return myArr;
};

const sortReverseArr = (arr) => {
  return arr?.sort((a, b) => b - a).find((int) => Math.max(int % 2 !== 0));
};
