'use strict'
/*
What is the largest prime factor of the given number?
*/

const largestPrimeFactor = (num) => {
    let primeFactor = 2;
    let numLeft = num;

    while(numLeft > 1){
        if(numLeft%primeFactor === 0){
            numLeft /= primeFactor;
        }
        else{
            let newPrimeFound = false;
            let counter = primeFactor + 1;
            while(newPrimeFound === false){
                let prime = true;
                for(let i = 2; i < counter; i++){
                    if(counter%i === 0){
                        prime = false;
                    };
                };
                if(prime){
                    newPrimeFound = true;
                    primeFactor = counter;
                }else{
                    counter++;
                }
            }
        
        }

    }

    return primeFactor
}

// console.log(largestPrimeFactor(2), "<- should return 2") //should return 2.
// console.log(largestPrimeFactor(3), "<- should return 3") //should return 3.
// console.log(largestPrimeFactor(5), "<- should return 5") //should return 5.
// console.log(largestPrimeFactor(7), "<- should return 7") //should return 7.
// console.log(largestPrimeFactor(13195), "<- should return 29") //should return 29.
console.log(largestPrimeFactor(600851475143), "<- should return 6857") //should return 6857.