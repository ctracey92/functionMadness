"use strict";
/*
Description:
Create a RomanNumerals object that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
| Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |
*/

const RomanNumerals = {
  toRoman: (num) => {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let toGo = num;
    let romanized = "";

    for (let i = 0; i < nums.length; i++) {
      while (toGo > 0 && nums[i] <= toGo) {
        toGo -= nums[i];
        romanized += romans[i];
      }
    }

    return romanized;
  },

  fromRoman: (str) => {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let currStr = str.split("");
    let num = 0;

    let romanArr = [];

    let index = 0;
    while (index < currStr.length) {
      let combined = currStr[index] + currStr[index + 1];
      if (romans.includes(combined)) {
        romanArr.push(combined);
        index += 2;
      } else {
        romanArr.push(currStr[index]);
        index++;
      }
    }

    romanArr.map((i) => {
      num += nums[romans.indexOf(i)];
    });

    return num;
  },
};

//Test Cases:
console.log(RomanNumerals.toRoman(1000), "<- Should be M");
console.log(RomanNumerals.toRoman(999), "<- Should be CMXCIX");
console.log(RomanNumerals.toRoman(4), "<- Should be IV");
console.log(RomanNumerals.toRoman(1), "<- Should be I");
console.log(RomanNumerals.toRoman(1991), "<- Should be MCMXCI");
console.log(RomanNumerals.toRoman(2006), "<- Should be MMVI");
console.log(RomanNumerals.toRoman(2020), "<- Should be MMXX");

console.log(RomanNumerals.fromRoman("XXI"), "<- Should be 21");
console.log(RomanNumerals.fromRoman("I"), "<- Should be 1");
console.log(RomanNumerals.fromRoman("III"), "<- Should be 3");
console.log(RomanNumerals.fromRoman("IV"), "<- Should be 4");
console.log(RomanNumerals.fromRoman("MMVII"), "<- Should be 2007");
console.log(RomanNumerals.fromRoman("MDCLXIX"), "<- Should be 1669");
