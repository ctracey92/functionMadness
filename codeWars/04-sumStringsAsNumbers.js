/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
***Keep in mind scientific notation for large numbers....
*/

const sumStrings = (a, b) => {
  //Use '0' if args is not defined
  a ? (a = a) : (a = "0");
  b ? (b = b) : (b = "0");


    let e = (parseInt(a) + parseInt(b)).toString().split('e+')
    let num = "1";
    for(let i = 0; i < parseInt(e[1]); i++){
        num+=0
    };
    let bigNum = Number(e[0]) * Number(num);
    let smallerNum = (bigNum - (parseInt(a) + parseInt(b))).toString() ;




    console.log(smallerNum)

  return (Number(a) + Number(b)).toPrecision(e[1]);
}


console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'))