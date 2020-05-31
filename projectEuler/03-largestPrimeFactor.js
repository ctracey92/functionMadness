'use strict'
/*
What is the largest prime factor of the given number?
"Prime Factorization" is finding which prime numbers multiply together to make the original number. Think of the below tree:
                                24
                               /  \
                              2    12
                                  / \
                                 3   4
                                    / \
                                    2 2

The prime factors here are 3,2,2,2 the highest being 3.
You should start with the smallest prime factor and then slowly move up...
*/

const largestPrimeFactor = (num) => {
    //Inisitialize our prime factor at 2, the smallest prime
    let primeFactor = 2;

    //Copy our num into numLeft so we don't mutate it
    let numLeft = num;

    //While numLeft is greater than 0, we have to keep running the code 
    while(numLeft > 1){
        //If numLeft is evenly divisible by our current prime factor, we can keep using it, and will divide our numLeft by it.
        if(numLeft%primeFactor === 0){
            numLeft /= primeFactor;
        }

        //Otherwise we need a new prime factor
        else{
            //Our condition to break out of our next while loop
            let newPrimeFound = false;

            //Our counter to find the next prime
            let counter = primeFactor + 1;

            //While we have not found a new prime keep running
            while(!newPrimeFound){
                //We will start by assuming something is a prime until we find out otherwise
                let prime = true;
                
                //Run through all numbers 2 -> counter and check to see if the counter is divisible by it to determine if the counter is prime or not
                for(let i = 2; i < counter; i++){
                    if(counter%i === 0){
                        prime = false;
                    };
                };

                //If the num is prime we set our Prime Factor to the counter and break out
                if(prime){
                    newPrimeFound = true;
                    primeFactor = counter;
                }

                //Otherwise we keep on going and icrement our counter by 1
                else {
                    counter++;
                }
            }
        
        }

    }

    return primeFactor
}


//Test Cases
console.log(largestPrimeFactor(2), "<- should return 2") //should return 2.
console.log(largestPrimeFactor(3), "<- should return 3") //should return 3.
console.log(largestPrimeFactor(5), "<- should return 5") //should return 5.
console.log(largestPrimeFactor(7), "<- should return 7") //should return 7.
console.log(largestPrimeFactor(13195), "<- should return 29") //should return 29.
console.log(largestPrimeFactor(600851475143), "<- should return 6857") //should return 6857.