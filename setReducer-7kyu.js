// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer

// When your function has reduced the array to a single integer following these rules, it should return that integer.

const setReducer = (arr) => {
  if (arr.length === 1) return arr[0]; // Code runs until arr length === 1, then returns arr[0]
  let reducedArr = [];

  for (let i = 0, count = 1; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      reducedArr.push(count);
      count = 1;
    }
  }
  return setReducer(reducedArr);
};

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])); //2
