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
  let numStr = str.split(".");
  if(!numStr.every(i => i!=="")){return false}
  if (
    !numStr.every(i => {
      if (i.length > 1) {
        return i[0] !== "0";
      } else {
        return true;
      }
    })
  ) {
    console.log("failing 0's");
    return false;
  }
  if (!numStr.every(i => !i.includes(" "))) {
    console.log("failing _'s");
    return false;
  }
  if (numStr.every(i => /[a-z]/ig.test(i))) {
    console.log("failing letters's");
    return false;
  }
  let nums = numStr.map(i => Number(i));
  if (nums.length !== 4) {
    console.log("failing length")
    return false;
  }
  if(!numStr.every(i => !i.includes("\n"))){return false}
  if (!nums.every(i => i === Math.floor(i) && i === Math.abs(i)));

  return nums.every(i => 0 <= i && i <= 255);
};

// console.log(isValidIP("0.0.0.0"), "<- Should return true"); //Should return true
// console.log(isValidIP("12.255.56.1"), "<- Should return true"); //Should return true
// console.log(isValidIP("137.255.156.100"), "<- Should return true"); //Should return true
// console.log(isValidIP(""), "<- Should return false"); //Should return false
// console.log(isValidIP("abc.def.ghi.jkl"), "<- Should return false"); //Should return false
// console.log(isValidIP("123.456.789.0"), "<- Should return false"); //Should return false
// console.log(isValidIP("12.34.56"), "<- Should return false"); //Should return false
// console.log(isValidIP("01.02.03.04"), "<- Should return false"); //Should return false
// console.log(isValidIP("256.1.2.3"), "<- Should return false"); //Should return false
// console.log(isValidIP("1.2.3.4.5"), "<- Should return false"); //Should return false
// console.log(isValidIP("123,45,67,89"), "<- Should return false"); //Should return false
console.log(isValidIP("1e0.1e1.1e2.2e2"), "<- Should return false"); //Should return false
// console.log(isValidIP(" 1.2.3.4"), "<- Should return false"); //Should return false
// console.log(isValidIP("1.2.3.4 "), "<- Should return false"); //Should return false
// console.log(isValidIP("12.34.56.-7"), "<- Should return false"); //Should return false
// console.log(isValidIP("1.2.3.4\n"), "<- Should return false"); //Should return false
// console.log(isValidIP("\n1.2.3.4"), "<- Should return false"); //Should return false
