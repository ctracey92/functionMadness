/*
Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const duplicateCount = text => {
  //We start by putting the text into lowercase to handle case sensetivity and into an array so we can map over it
  let str = text.toLowerCase().split("");

  //Our holding array for our letters that we have seen thus far
  let firstUse = [];
  //The length of this will be our final answer
  let multiUse = [];

  //Map over the str arr
  str.map(i => {
    //If it has been used once so far and it isnt in the multi arr push it in there
    if (firstUse.includes(i) && !multiUse.includes(i)) {
      multiUse.push(i);
    }
    //Else if it isnt in the first use push it in there
    else if (!firstUse.includes(i)) {
      firstUse.push(i);
    }
  });

  //Return the length of multi use.
  return multiUse.length;
};

//Test Cases
console.log(duplicateCount(""), "<- should be 0"); //should be 0
console.log(duplicateCount("abcde"), "<- should be 0"); //should be 0
console.log(duplicateCount("aabbcde"), "<- should be 2"); //should be 2
console.log(duplicateCount("aabBcde"), "<- should be 2"); //should be
console.log(duplicateCount("Indivisibility"), "<- should be 1"); //should be 1
console.log(duplicateCount("Indivisibilities"), "<- should be 2"); //should be 2
