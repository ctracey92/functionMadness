/*
Description:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = message => {
  //Our alphabet arrays
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = alphabet.toUpperCase().split("");
  let lowerCase = alphabet.split("");

  //Our message now in arr form so that we can map over it
  let messageArr = message.split("");

  //Map over the arr
  let finalMessageArr = messageArr.map(i => {
    //If it is uppercase return that char + 13
    if (upperCase.includes(i)) {
      return upperCase[(upperCase.indexOf(i) + 13) % 26];
    }
    //If it is lowercase return that char + 13
    else if (lowerCase.includes(i)) {
      return lowerCase[(lowerCase.indexOf(i) + 13) % 26];
    }
    //Otherwise return i
    else {
      return i;
    }
  });

  //Return our array in string format
  return finalMessageArr.join("");
};


//Test Cases
console.log(rot13("test"), "<- Should be grfg");
console.log(rot13("Grfg"), "<- Should be Test");
console.log(rot13("Codewars"), "<- Should be Pbqrjnef");
console.log(rot13("Ruby is cool!"), "<- Should be Ehol vf pbby!");
console.log(rot13("10+2 is twelve."), "<- Should be 10+2 vf gjryir.");
console.log(rot13("abcdefghijklmnopqrstuvwxyz"), "<- Should be nopqrstuvwxyzabcdefghijklm");
