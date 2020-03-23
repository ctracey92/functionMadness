/*
In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]
If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Sum all of the final digits:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

  18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/

const validate = n => {
  //Changing out number into an array of numbers  
  let nums = n.toString().split("").map(i => parseInt(i));

  //Doubling ever other num starting second from the right
  for (let i = nums.length - 2; i >= 0; i -= 2) {
    let res = nums[i] * 2;

    //If the number is greater than 9 transform it into a single num by subtracting 9
    res > 9 ? (nums[i] = res - 9) : (nums[i] = res);
  }

  //Sum up the array
  let sum = nums.reduce((total, i) => (total += i));

  //Return if it is divisible by 10 evenly
  return sum % 10 === 0;
};

//Test Cases
console.log(validate(123), "<- Should be false"); //Should be false
console.log(validate(1), "<- Should be false"); //Should be false
console.log(validate(2121), "<- Should be true"); //Should be true
console.log(validate(1230), "<- Should be true"); //Should be true
console.log(validate(8675309), "<- Should be false"); //Should be false
console.log(validate(4111111111111111), "<- Should be true"); //Should be true
console.log(validate(26), "<- Should be true"); //Should be true
console.log(validate(2626262626262626), "<- Should be true"); //Should be true
console.log(validate(91), "<- Should be true"); //Should be true
console.log(validate(92), "<- Should be false"); //Should be false
console.log(validate(912030), "<- Should be true"); //Should be true
console.log(validate(922030), "<- Should be false"); //Should be false
