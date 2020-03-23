/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
***Keep in mind scientific notation for large numbers....
Also BigInt() is not allowed 
*/

const sumStrings = (a, b) => {
  //Use '0' if args is not defined
  a ? (a = a) : (a = "0");
  b ? (b = b) : (b = "0");

  //If the number would be shown in e notation...
  if ((Number(a) + Number(b)).toString().includes("e")) {
    //Split the strings into arrays
    let aArr = a.split("");
    let bArr = b.split("");

    //If the strings aren't the same length add 0's to the beggining of the shorter array until they match
    if (a.length > b.length) {
      while (bArr.length < aArr.length) {
        bArr.unshift("0");
      }
    } else if (a.length < b.length) {
      while (bArr.length > aArr.legnth) {
        aArr.unshift("0");
      }
    }

    //Our array to hold the combined product of the two arrays individual values
    let combined = [];
    for (let i = 0; i < aArr.length; i++) {
      combined.push(parseInt(aArr[i]) + parseInt(bArr[i]));
    }

    //Working backwards over our combined array we will check to see if the number is greater than 9, if it is subtract 10 and add one to the item to the left of it, this is so that we can join the array back together to get an accurate number
    for (let i = combined.length - 1; i > 0; i--) {
      if (combined[i] > 9) {
        combined[i] -= 10;
        combined[i - 1] += 1;
      }
    }

    //Join it and return it
    return combined.join("");
  }
  //Otherwise make them numbers, add them, and turn them into a string
  else {
    return (parseInt(a) + parseInt(b)).toString();
  }
};

/*
Normally we would use BigInt to do this problem, which would shorten it down tremendously but the problem did not allow for it.
*/

//Test Cases
console.log("123", "456", "<- Should be 579"); //Should be 579
console.log("8797", "45", "<- Should be 8842"); //Should be 8842
console.log("800", "9567", "<- Should be 10367"); //Should be 10367
console.log("99", "1", "<- Should be 100"); //Should be 100
console.log("00103", "08567", "<- Should be 8670"); //Should be 8670
console.log("", "5", "<- Should be 5"); //Should be 5
console.log(
  "712569312664357328695151392",
  "8100824045303269669937",
  "<- Should be 712577413488402631964821329"
); //Should be 712577413488402631964821329
console.log(
  "50095301248058391139327916261",
  "81055900096023504197206408605",
  "<- Should be 131151201344081895336534324866"
); //Should be 131151201344081895336534324866
