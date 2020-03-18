"use strict"

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

const largestPalindromeProduct = (n) => {
    let largestPalandrome = '';
    for(let i = 0; i < n; i++ ){
        largestPalandrome+=9
    }
    largestPalandrome = parseInt(largestPalandrome) * parseInt(largestPalandrome);
    
    let keepGoing = true;

    while(keepGoing){
        let reversed = parseInt(largestPalandrome.toString().split("").reverse().join(""));
        if(largestPalandrome === reversed){
               keepGoing = false;
        }
        else{
            largestPalandrome--;
        };
     
    }



    return largestPalandrome;
}

console.log(largestPalindromeProduct(2), "<- should return 9009")
console.log(largestPalindromeProduct(3), "<- should return 906609")
