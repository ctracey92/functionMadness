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
    let e = (parseInt(a) + parseInt(b)).toString().split("e+");
    let num = "1";
    let zeros = parseInt(e[1])
    for (let i = 0; i < zeros; i++) {
      num += 0;
    }
    e[0] = e[0].split("")
    e[0][e[0].length-1] = parseInt(e[0][e[0].length-1])-1
    e[0][e[0].length-1] = e[0][e[0].length-1].toString()
    e[0] = e[0].join('')

    let bigNum = Number(e[0]) * Number(num);
    console.log((parseInt(a) + parseInt(b)))

    let smallerNum = ((parseInt(a) + parseInt(b)) - bigNum ) //.toString();
    console.log(smallerNum)

    let finalNum = e[0].split(".").join("") + smallerNum;
    return finalNum;
  }else{
    return (Number(a) + Number(b)).toString()
  }

};

// const sumStringsWithBigInt = (a, b) => {
//   a ? (a = a) : (a = "0");
//   b ? (b = b) : (b = "0");
//   let res = BigInt(a) + BigInt(b);
//   let answer = res.toLocaleString();

//   return answer;
// };

let res = sumStrings("712569312664357328695151392", "8100824045303269669937");
// console.log(res)
console.log(res, "712577413488402631964821329");
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937").length,
  "712577413488402631964821329".length
);
// console.log(
//   sumStrings("50095301248058391139327916261", "81055900096023504197206408605"),

// '131151201344081895336534324866'

// );
