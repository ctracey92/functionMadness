/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/

const isValidIP = str => {
  let numStr = str.split("."); //Splits into the octets

  //Checks to make sure we have 4 octets
  if (nums.length !== 4) {
    return false;
  }

  //Checks to make sure that the octet doesnt contain any non number chars
  if (!numStr.every(i => i === Number(i).toString())) {
    return false;
  }

  //Transforms all the strings into numbers
  let nums = numStr.map(i => Number(i));

  //If they are all between 0 and 255 this is a good IP
  return nums.every(i => 0 <= i && i <= 255);
};

//Test Cases
console.log(isValidIP("0.0.0.0"), "<- Should return true"); //Should return true
console.log(isValidIP("12.255.56.1"), "<- Should return true"); //Should return true
console.log(isValidIP("137.255.156.100"), "<- Should return true"); //Should return true
console.log(isValidIP(""), "<- Should return false"); //Should return false
console.log(isValidIP("abc.def.ghi.jkl"), "<- Should return false"); //Should return false
console.log(isValidIP("123.456.789.0"), "<- Should return false"); //Should return false
console.log(isValidIP("12.34.56"), "<- Should return false"); //Should return false
console.log(isValidIP("01.02.03.04"), "<- Should return false"); //Should return false
console.log(isValidIP("256.1.2.3"), "<- Should return false"); //Should return false
console.log(isValidIP("1.2.3.4.5"), "<- Should return false"); //Should return false
console.log(isValidIP("123,45,67,89"), "<- Should return false"); //Should return false
console.log(isValidIP("1e0.1e1.1e2.2e2"), "<- Should return false"); //Should return false
console.log(isValidIP(" 1.2.3.4"), "<- Should return false"); //Should return false
console.log(isValidIP("1.2.3.4 "), "<- Should return false"); //Should return false
console.log(isValidIP("12.34.56.-7"), "<- Should return false"); //Should return false
console.log(isValidIP("1.2.3.4\n"), "<- Should return false"); //Should return false
console.log(isValidIP("\n1.2.3.4"), "<- Should return false"); //Should return false
