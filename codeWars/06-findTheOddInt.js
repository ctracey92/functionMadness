/*
Description:
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

const findOdd = arr => {
  //Basic for loop to loop over the array
  for (let i = 0; i < arr.length; i++) {
    //our counter var
    let counter = 0;
    //Our current num var
    let currNum = arr[i];
    //map over the array since we need to check all values
    arr.map(i => {
      if (currNum === i) {
        counter++;
      }
    });
    //Check to see if counter is odd or not
    if (counter % 2 == 1) {
      return currNum;
    }
  }
};

//Test Cases
console.log(
  [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
  "<- should be 5"
); //Should be 5
console.log([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], "<- should be -1"); //Should be -1
console.log([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], "<- should be 5"); //Should be 5
console.log([10], "<- should be 10"); //Should be 10
console.log([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], "<- should be 10"); //Should be 10
console.log([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], "<- should be 1"); //Should be1
