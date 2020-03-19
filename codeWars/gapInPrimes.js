/*
The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:
g (integer >= 2) which indicates the gap we are looking for
m (integer > 2) which gives the start of the search (m inclusive)
n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise null .

#Examples: gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin return[]`

gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

gap(6,100,110) --> null : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.
*/

"use strict";
const gap = (g, m, n) => {
  //This will be our final answer supplied in array format
  let answer = [];

  //Function to see if the number is a prime
  const primeCheck = num => {
    //If the number is 1 its prime
    if (num <= 1) {
      return true;
    }
    //Otherwise if it is 2 or 3 its prime
    else if (num <= 3) {
      return true;
    }
    //If it is divisible by 2 or 3 its not a prime
    else if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    //With the basic tests out of the way we can get into the harder tests
    //We start at 5 because that is the next prime number
    let i = 5;
    //While i is less than the square root of the number we continue
    while (i * i <= num) {
      // If the number is evenly divisiible by i or by i+2, thus checking odd numbers that arent divisible by 3.
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    //If it passes the above tests its a prime number
    return true;
  };

  //We initialize our counter starting at m, the beggining
  let counter = m;
  //While the counter is less than or equal to n-g (the end of our range) we continue
  while (counter <= n - g) {
    //If that number is prime, we will check to see if the number plus our gap is also prime
    if (primeCheck(counter)) {
      //If this is also a prime...
      if (primeCheck(counter + g)) {
        //We will check all of the odd numbers in between them to make sure none of those are primes either
        let noPrimes = true;
        for (let a = counter + 2; a < counter + g; a += 2) {
          if (primeCheck(a)) {
            noPrimes = false;
            break;
          }
        }
        if (noPrimes) {
          answer.push(counter, counter + g);
          break;
        } else {
          counter += g;
        }
      }
      //Else we increment one and keep going
      else {
        counter++;
      }
    }
    //Else we increment one and keep going
    else {
      counter++;
    }
  }

  if (answer.length > 0) {
    return answer;
  } else {
    return null;
  }
};
console.log(gap(2,100,110), "<- Should return [101,103]") //Should return [101,103]  
console.log(gap(4, 100, 110), "<- Should return [103,107]") //Should return [103,107]
console.log(gap(6,100,110), "<- Should return null") //Should return null 
console.log(gap(8,300,400), "<- Should return [359,367]") //Should return [359,367] 
console.log(gap(10,300,400), "<- Should return [337,347]") //Should return [337,347] 
