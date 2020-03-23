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

  if ((Number(a) + Number(b)).toString().includes("e")) {
    let aArr = a.split("");
    let bArr = b.split("");
    if (a.length > b.length) {
      while (bArr.length < aArr.length) {
        bArr.unshift("0");
      }
    } else if (a.length < b.length) {
      while (bArr.length > aArr.legnth) {
        aArr.unshift("0");
      }
    }

    let combined = [];
    for (let i = 0; i < aArr.length; i++) {
      combined.push(parseInt(aArr[i]) + parseInt(bArr[i]));
    }

    for (let i = combined.length - 1; i > 0; i--) {
      if (combined[i] > 9) {
        combined[i] -= 10;
        combined[i - 1] += 1;
      }
    }

    return combined.join("");
  } else {
    return (Number(a) + Number(b)).toString();
  }
};
