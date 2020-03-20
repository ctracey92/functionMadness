/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

const humanReadable = seconds => {
  //Save our arg as sec
  let sec = seconds;

  //Our answer key obj
  let answer = {
    3600: 00,
    60: 00,
    1: 00
  };

  //Our array to map over to see how much we need to ise
  const secsInTime = [3600, 60, 1];

  //Map over it
  secsInTime.map(item => {
    //While the current item is less than or equal to our remaining time we keep going
    while (item <= sec) {
      //Subtract that items ammount from sec
      sec -= item;
      //Add that item to our answer key obj
      answer[item] += 01;
    }
  });

  //Return the answer
  return `${("0" + answer[3600]).slice(-2)}:${("0" + answer[60]).slice(-2)}:${(
    "0" + answer[1]
  ).slice(-2)}`;
};

//Test Cases
console.log(humanReadable(0), "<- should be 00:00:00"); //should be 00:00:00
console.log(humanReadable(59), "<- should be 00:00:59"); //should be 00:00:59
console.log(humanReadable(60), "<- should be 00:01:00"); //should be 00:01:00
console.log(humanReadable(90), "<- should be 00:01:30"); //should be 00:01:30
console.log(humanReadable(3599), "<- should be 00:59:59"); //should be 00:59:59
console.log(humanReadable(3600), "<- should be 01:00:00"); //should be 01:00:00
console.log(humanReadable(45296), "<- should be 12:34:56"); //should be 12:34:56
console.log(humanReadable(86399), "<- should be 23:59:59"); //should be 23:59:59
console.log(humanReadable(86400), "<- should be 24:00:00"); //should be 24:00:00
console.log(humanReadable(359999), "<- should be 99:59:59"); //should be 99:59:59
